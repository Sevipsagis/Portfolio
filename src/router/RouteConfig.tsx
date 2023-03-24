import { createBrowserRouter } from 'react-router-dom'

import Root from './'
import AboutPage from './About'
import ExperiencePage from './Experience'
import ResumePage from './Resume'

const RouteConfig = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>Hello</div>,
        children: [
            {
                path: '/',
                element: <AboutPage />,
            },
            {
                path: '/experience',
                element: <ExperiencePage />,
            },
            {
                path: '/resume',
                element: <ResumePage />,
            },
        ],
    },
])

export default RouteConfig
