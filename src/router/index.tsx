import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
// 懒加载
const About = lazy(() => import("@/views/About"))

const routes = [
    {
        path:"/",
        element: <Navigate to="/home"/>
    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path: "/about",
        element: <About />
    }
]
export default routes