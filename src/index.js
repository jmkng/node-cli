import { Command } from 'commander';
import build from './command/build.js';

// TODO: Remove. This is just for reference, I think commander generates usage.
// const usage = `
//   usage: onyx [options] [command]

//   commands:
//     'build' [options] - build a site
//     'new' <location> - create a new site

//     also see [command] --help

//   global options:
//     -v, --verbose   show debug information
//     -q, --quiet     only output critical errors
//     -V, --version   output version and exit
//     -h, --help      show help
// `

const main = () => {
    console.log('debug: main')

    const program = new Command();

    // Set global program information.
    program
        .name('onyx')
        .description('onyx description')
        .version('0.1.0');

    // Initialize all Onyx commands on program.
    for (const n of [build]) {
        const command = program.command(n.name)

        command
            .description(n.description)

        n
            .options(command);
    }

    program.parse();

}

export default main;