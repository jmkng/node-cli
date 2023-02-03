/**
 * @file Implement a command that can generate a content tree on a directory.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Tree from '../tree/tree.js';
import walk from '../util/walk.js'

const name = 'tree'

const description = 'tree desc goes here'

const options = (command) => {
    command
        .action(options => execute(options))
}

const execute = async (argv) => {
    const raw = readFileSync(join(argv.dir, 'onyx.json'));
    const config = JSON.parse(raw);

    const tree = new Tree(config.tree.map);

    for await (const file of walk(argv.dir)) {
        tree.absorb(file);
    }

    tree.print();
}

export default { name, description, options, execute }