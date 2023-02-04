const name = 'serve'

const description = ''

const options = (command) => {
    command
        .action(options => execute(options))
        .option('-p, --port <port>', 'Post used to serve.')
        .option('-w, --watch', 'Toggle automatic rebuild and refresh.')
}

const execute = (argv) => {

}

export default { name, description, options, execute }