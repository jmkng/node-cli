const name = 'build'

const description = ''

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = async (argv) => {
}

export default { name, description, options, execute }