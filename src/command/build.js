/**
 * @file Implement a command that can build a project.
 */

const name = 'build'

const description = 'build desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = (argv) => {

}

export default { name, description, options, execute }