import { route } from 'preact-router'
import profilePicture from '../assets/images/profile.png'

export default function About() {
    return (
        <section className="min-w-10/10 min-h-10/10 flex flex-wrap justify-center items-center snap-start">
            <div class="w-full min-h-10/10 bg-base-300 p-8 md:p-12 lg:p-16 flex flex-wrap lg:items-center lg:justify-start">
                <div class="relative w-12/12 h-fit lg:w-6/12">
                    <img
                        src={profilePicture}
                        class="w-11/12 md:w-10/12 lg:w-12/12 mr-auto ml-auto"
                    />
                    <h1
                        class="absolute uppercase font-medium text-accent-focus leading-tight text-3xl md:text-7xl lg:text-5xl"
                        style={{
                            bottom: '15%',
                            right: '10%',
                        }}
                    >
                        About Me
                    </h1>
                </div>
            </div>
        </section>
    )
}
