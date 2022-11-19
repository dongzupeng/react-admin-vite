import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
// 懒加载
const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))

const routes = [
    {
        path:"/",
        element: <Navigate to="/page1"/>
    },
    {
        path:"/",
        element: <Home/>,
        children:[
            {
                path:'/page1',
                element:<Page1/>
            },
            {
                path: '/page2',
                element: <Page2 />
            }
        ]
    }
    // {
    //     path:"/home",
    //     element:<Home />
    // },
    // {
    //     path: "/about",
    //     element: <About />
    // }
]
export default routes