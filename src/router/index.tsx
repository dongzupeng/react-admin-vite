import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
// 懒加载
const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))
const Tom = lazy(() => import("@/views/user/tom"))
const Bill = lazy(() => import("@/views/user/bill"))
const Alex = lazy(() => import("@/views/user/alex"))
const One = lazy(() => import("@/views/team/one"))
const Two = lazy(() => import("@/views/team/two"))

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: <Page1 />
            },
            {
                path: '/page2',
                element: <Page2 />
            },
            {
                path: '/user',
                elements: <Tom />,
                children: [
                    {
                        path: '/user/tom',
                        element: <Tom />
                    },
                    {
                        path: '/user/bill',
                        element: <Bill />
                    },
                    {
                        path: '/user/alex',
                        element: <Alex />
                    }
                ]
            },
            {
                path: '/team',
                elements: <One />,
                children: [
                    {
                        path: '/team/one',
                        element: <One />
                    },
                    {
                        path: '/team/two',
                        element: <Two />
                    }
                ]
            },

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