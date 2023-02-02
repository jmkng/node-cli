/**
 * @file Implement a command that can serve a built project with a local web server.
 */

const name = 'serve'

const description = 'serve desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
        .option('-p, --port <port>', 'Post used to serve.')
        .option('-w, --watch', 'Toggle automatic rebuild and refresh.')
}

const execute = (argv) => {

}

export default { name, description, options, execute }