import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化
import 'reset-css'
//引入全局样式
import '@/assets/styles/global.scss'
import App from './App'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
