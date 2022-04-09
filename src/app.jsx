import Router from 'preact-router'
import Home from './containers/home'
import About from './containers/about'
import Experience from './containers/experience'
import Project from './containers/project'
import NotFound from './containers/404'

export default function App(props) {
    return (
        <div class="min-w-full min-h-screen flex flex-wrap justify-center items-center">
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Experience path="/experience" />
                <Project path="/project/:projectId" />
                <NotFound default />
            </Router>
        </div>
    )
}
