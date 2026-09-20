import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { activate } from '../src/index.js';

const manifest = JSON.parse(readFileSync(new URL('../plugin.json', import.meta.url), 'utf8'));
assert.equal(manifest.runtime.type, 'node');
assert.equal(manifest.runtime.entry, 'src/index.js');
assert.equal(manifest.contributes.commands[0].name, 'hello.greet');
const plugin = activate();
assert.deepEqual(plugin.commands['hello.greet'].run(), { message: 'Hello, world!' });
assert.deepEqual(plugin.commands['hello.greet'].run({ name: 'Ada' }), { message: 'Hello, Ada!' });
console.log('Hello World plugin is ready.');
