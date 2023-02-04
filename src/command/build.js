/**
 * @file Implement a command that can build a project.
 */

import walk from "../util/walk.js"
import hbs from 'handlebars'

const name = 'build'

const description = 'build desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = async (argv) => {
    for await (const file of walk(argv.dir)) {
        // console.log(file);
    }

    const template = `
    
    `

    const data = { user: { name: 'Pants' } }

    const tmpl = hbs.compile(template);

    const html = tmpl(data);

    console.log(html);
}

export default { name, description, options, execute }