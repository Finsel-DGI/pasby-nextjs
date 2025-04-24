import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(`${__dirname}/package.json`, 'utf-8'));

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'module',
        strict: false,
        sourcemap: true,
      },
    ],
    plugins: [typescript(), nodeResolve(), commonjs(), json()],
    external: ['react', 'next', 'axios'],
  }, {
    input: 'src/server/index.ts',
    output: [
      {
        file: "dist/server/index.js",
        format: 'module',
        strict: false,
        sourcemap: true,
      },
    ],
    plugins: [typescript(), nodeResolve(), commonjs(), json()],
    external: ['react', 'next', 'axios'],
  }
];