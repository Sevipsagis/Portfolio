import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'

export default function App() {
    return (
        <div class="min-w-full min-h-screen flex flex-wrap justify-center items-center">
            <Router>
                <AsyncRoute
                    path="/"
                    getComponent={() =>
                        import('./containers/home').then((module) => module.default)
                    }
                />
                <AsyncRoute
                    path="/about"
                    getComponent={() =>
                        import('./containers/about').then((module) => module.default)
                    }
                />
                <AsyncRoute
                    path="/experience"
                    getComponent={() =>
                        import('./containers/experience').then((module) => module.default)
                    }
                />
                <AsyncRoute
                    path="/project/:projectId"
                    getComponent={() =>
                        import('./containers/project').then((module) => module.default)
                    }
                />
                <AsyncRoute
                    default
                    getComponent={() => import('./containers/404').then((module) => module.default)}
                />
            </Router>
        </div>
    )
}
