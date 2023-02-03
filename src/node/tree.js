/**
 * @file Define a Tree class, which extends Node and describes a folder that likely
 * contains other Nodes.
 */

import { lstatSync } from 'node:fs';
import { parse } from 'node:path';
import Node from './node.js';
import Page from './page.js';
import Static from './static.js';

class Tree extends Node {
    // Store map information for item extensions.
    lookup = {};

    // Store items based their location in the map, or parent directory name if
    // no map entry exists for the extension.
    nodes = {};

    constructor(map = undefined) {
        if (!map) {
            return;
        }

        const keys = Object.keys(map);

        for (const key of keys) {
            const values = Object.values(map[key]);
            for (const value of values) {
                let n = value;

                if (n === '' || n === undefined || n === null) {
                    continue;
                }

                if (value.startsWith('.')) {
                    n = n.substring(1);
                }

                this.lookup[n] = key;
            }
        }
    }

    // Add a new item to the tree.
    absorb(path) {
        const parsed = parse(path);

        if (!parsed.ext) {
            return;
        }

        if (this.lookup[parsed.ext.substring(1)]) {
            this.tree[this.lookup[parsed.ext.substring(1)]] = path;
            return;
        }

        this.tree[parsed.ext.substring(1)] = path;
    }

    // Print the shape of the tree to the console.
    print() {
        console.log(JSON.stringify(this.tree, undefined, 2));
    }
}

// Return some type of Node from a file at the given path.
const node = (path) => {
    if (lstatSync(path).isDirectory()) {
        return new Tree();
    }
    const parsed = parse(path);

    switch (parsed.ext) {
        case ".md", ".html", ".hbs":
            return new Page();
        case ".js", ".css":
            return new Static();
        default:
            return null;
    }
}

export default Tree;