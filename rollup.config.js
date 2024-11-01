import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert {type: "json"};
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