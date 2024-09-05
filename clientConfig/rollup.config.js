import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import pkg from '../package.json' assert {type: "json"};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      strict: false,
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [typescript(), nodeResolve(), commonjs(), json(), terser()],
  external: ['react', 'react-dom', 'next', 'axios', 'clsx'],
};

