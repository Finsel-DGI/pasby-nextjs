import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

// Server Rollup Config
const serverConfig = {
  input: 'src/server/index.ts',
  output: [
    {
      file: 'dist/server/index.js',
      format: 'es',
      strict: false,
      sourcemap: true,
    }
  ],
  plugins: [typescript(), nodeResolve(), commonjs(), json()],
  external: ['axios', 'cookies-next'],
};

// Main Library Rollup Config
const mainConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      strict: false,
      sourcemap: true,
    }
  ],
  plugins: [typescript(), nodeResolve(), commonjs(), json()],
  external: ['react', 'next', 'axios', 'clsx'],
};

export default [mainConfig];
