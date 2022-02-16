require('esbuild').build({
  entryPoints: ['src/index.ts'],
  outdir: 'lib',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: 'esm',
  target: ['esnext'],
  external: ["react"]
}).catch(() => process.exit(1))
