import { defineConfig } from 'vite'

export default defineConfig({
  // You might not need those. They are needed when importing modules with
  // top-level await such as three/examples/jsm/capabilities/WebGPU
  optimizeDeps: { esbuildOptions: { target: 'esnext' } },
  build: { target: 'esnext' },
})
