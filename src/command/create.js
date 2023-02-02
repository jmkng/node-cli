/**
 * @file Implement a command that can create a new project with some handy defaults.
 */

const name = 'create'

const description = 'create desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = (argv) => {

}

export default { name, description, options, execute }