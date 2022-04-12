import Landing from './section/landing'
import About from './section/about'

export default function Home() {
    return (
        <div class="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            <Landing />
            <About />
        </div>
    )
}
