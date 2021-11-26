import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Path from 'path'
const isProd = process.env.NODE_ENV === 'production'
const BASE = process.env.BASE || 'docs'
console.log(BASE)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir: Path.resolve(process.cwd(), '../../','docs'),//Specify the output directory (relative to project root).
  },
  base: isProd ? '/' : `/${BASE}`
})
