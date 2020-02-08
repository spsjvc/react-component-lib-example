import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/component-lib.js',
    format: 'umd',
    name: 'ComponentLib',
    globals: {
      'react': 'React',
      'styled-components': 'styled',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
  external: ['react', 'styled-components'],
}
