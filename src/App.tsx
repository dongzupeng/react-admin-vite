import { useState } from 'react'
import { Outlet, Link,useRoutes } from "react-router-dom"
import routes from "./router"

function App() {
  const [count, setCount] = useState(0)
  //使用useRoutes hook函数
  const routerView = useRoutes(routes)
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {/* 占位符组件，类似vue中的<router-view></router-view> */}
      {/* <Outlet></Outlet> */}
      {routerView}
    </div>
  )
}

export default App
