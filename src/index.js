/**
 * @file Onyx entry point.
 */

import { Command } from 'commander';
import build from './command/build.js';
import create from './command/create.js';
import serve from './command/serve.js';
import tree from './command/tree.js';

const main = () => {
    // Raw string value of a requested command, if any.
    const raw = process.argv[2];

    const program = new Command();

    // Create global Command instance and set global program information.
    program
        .name('onyx')
        .description('onyx description')
        .version('0.1.0')

    common(program);

    // This is set to the global Command instance by default, but if a command
    // is being requested it will be set to another instance of Command that contains
    // the expected options for the command.
    let request = program;

    // Initialize all Onyx commands on program.
    for (const n of [build, create, serve, tree]) {
        const command = program.command(n.name)

        common(command);
        shared(command);

        command
            .description(n.description)

        n
            .options(command);

        // If raw matches the name of the command, override request, otherwise request
        // stays equal to the global Command.
        if (raw !== undefined && n.name === raw) {
            request = command;
        }
    }

    // If commander can determine that a specific action is being requested, and it can
    // handle that action itself, it will perform the action (ex. display help) and exit.
    request.parse();

    // At this point, the action handler in the requested command will handle execution
    // of the command.
    // https://github.com/tj/commander.js/#action-handler
}

// Define options on the given command instance that are shared amongst
// all instaces of Command, including the global Program instance.
const common = (command) => {
    command
        .option('-v, --verbose', 'Toggle verbose output.')
}

// Define options on the given Command instance that are shared amongst
// all commands.
const shared = (command) => {
    command
        .option('-d, --dir <string>', 'Path to project root.', process.cwd())
}

export default main;