/**
 * @file Implement a command that can generate a content tree on a directory.
 */

import { join } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

const name = 'tree'

const description = 'tree desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = (argv) => {
    const files = readdirSync(argv)

    for (const file of files) {
        // create some kind of item
        // check if ext matches something in config
    }
}

export default { name, description, options, execute }