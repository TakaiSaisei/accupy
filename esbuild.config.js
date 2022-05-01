const path = require('path')
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')

const baseDir = path.join(process.cwd(), 'app/javascript')

require('esbuild').build({
    entryPoints: ['application.js'],
    bundle: true,
    outdir: path.join(process.cwd(), 'app/assets/builds'),
    absWorkingDir: baseDir,
    watch: process.argv.includes('--watch'),
    sourcemap: process.argv.includes('--sourcemap'),
    plugins: [pnpPlugin({
        baseDir: baseDir
    })]
}).catch(() => process.exit(1))
