import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import RouteConfig from './router/RouteConfig'
import './index.css'

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {},
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <NextUIProvider theme={darkTheme}>
            <RouterProvider router={RouteConfig} />
        </NextUIProvider>
    </React.StrictMode>
)
