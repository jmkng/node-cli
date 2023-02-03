/**
 * @file Supply a function that can be used to walk a directory recursively.
 */

import { opendir } from 'node:fs/promises';
import { join } from 'node:path'

async function* walk(dir) {
    for await (const d of await opendir(dir)) {
        const entry = join(dir, d.name);

        if (d.isDirectory()) {
            yield* walk(entry);
        }

        else if (d.isFile()) {
            yield entry;
        }
    }
}

export default walk;