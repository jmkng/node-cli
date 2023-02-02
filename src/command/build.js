const name = 'build'

const description = 'build desc goes here'

const options = (command) => {
    command
        .option('-d, --dir <string>', 'set operation directory')
}

const command = (argv) => {
    console.log('debug: build command started');
    console.log(argv);
}

export default { name, description, options, command }