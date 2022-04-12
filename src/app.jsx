import Landing from './containers/landing'
import About from './containers/about'

export default function App() {
    return (
        <div class="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            <Landing />
            <About />
        </div>
    )
}
