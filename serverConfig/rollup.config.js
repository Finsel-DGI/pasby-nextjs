import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/server/index.ts',
  plugins: [typescript()],
  output: [
    {
      file: 'dist/server/cjs/index.js',
      format: 'cjs',
      strict: false,
      sourcemap: true,
    },
  ]
};
