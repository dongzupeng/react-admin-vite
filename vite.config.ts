import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
