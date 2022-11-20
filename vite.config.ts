import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import styleImport,{ AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // styleImport({
    //   resolves:[
    //     AntdResolve()
    //   ]
    // })
  ],

  //配置别名
  resolve: {
      alias: {
        "@": path.resolve(__dirname, './src')
      }
    }
  })
