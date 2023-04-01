import ts from 'rollup-plugin-ts'
import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync('package.json', {encoding: 'utf8'}));

export default [
  {
    plugins: [
      ts({
        tsconfig: 'tsconfig.json'
      }),
    ],
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        format: 'cjs',
        file: pkg.main,
      },
      {
        format: 'es',
        file: pkg.module
      },
      {
        format: 'umd',
        file: pkg.browser,
        name: 'chrome_plugin_common'
      }
    ]
  }
]
