require('esbuild').build({
  entryPoints: ['src/index.ts'],
  outdir: 'cjs',
  bundle: true,
  sourcemap: true,
  minify: true,
  format: 'cjs',
  target: ['esnext'],
  external: ["react"]
}).catch(() => process.exit(1))
