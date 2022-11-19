import { Suspense } from "react"
import { Outlet, Link, useRoutes } from "react-router-dom"
import routes from "./router"

function App() {
  //使用useRoutes hook函数
  const routerView = useRoutes(routes)
  return (
    <Suspense fallback={<h2>Loading..</h2>}>
      <div className="App">
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link> */}
        {/* 占位符组件，类似vue中的<router-view></router-view> */}
        {/* <Outlet></Outlet> */}
        {routerView}
      </div>
    </Suspense>

  )
}

export default App
