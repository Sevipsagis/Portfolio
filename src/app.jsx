import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'

export default function App() {
    return (
        <Router>
            <AsyncRoute
                path="/"
                getComponent={() => import('./containers/home').then((module) => module.default)}
            />
            <AsyncRoute
                default
                getComponent={() => import('./containers/404').then((module) => module.default)}
            />
        </Router>
    )
}
