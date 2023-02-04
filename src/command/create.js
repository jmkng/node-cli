const name = 'create'

const description = ''

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = (argv) => {
}

export default { name, description, options, execute }