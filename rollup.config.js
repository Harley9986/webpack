import { babel } from '@rollup/plugin-babel'
import styles from "rollup-plugin-styles"
import serve from "rollup-plugin-serve"
import livereload from 'rollup-plugin-livereload'
import image from '@rollup/plugin-image'

export default {
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'es'
  },
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    styles(),
    serve({
      open: true,
      port: 8000,
      contentBase: './'
    }),
    livereload(),
    image({
      limit: 100000,
    })
  ]
};