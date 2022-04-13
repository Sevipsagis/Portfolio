import { route } from 'preact-router'

export default function Landing() {
    return (
        <section className="min-w-10/10 min-h-10/10 flex flex-wrap justify-center items-center snap-start">
            <div class="w-full min-h-9/10 bg-base-300 flex flex-wrap items-center justify-center md:justify-start">
                <div class="md:m-24">
                    <h1 class="uppercase text-5xl md:text-7xl font-medium text-accent-focus leading-tight">
                        Nuttapol
                    </h1>
                    <h1 class="uppercase text-5xl md:text-7xl font-medium text-accent-focus leading-tight">
                        Phomthon
                    </h1>
                    <hr class="border-t-4 border-base-content my-4 motion-safe:animate-pulse" />
                    <p class="text-secondary text-xl md:text-2xl font-light leading-tight">
                        {'< Software Developer />'}
                    </p>
                    <p class="text-secondary text-xl md:text-2xl font-light leading-tight">
                        {'< Technology Geek />'}
                    </p>
                    <p class="text-secondary text-xl md:text-2xl font-light leading-tight">
                        {'< Movie Lovers />'}
                    </p>
                </div>
            </div>
        </section>
    )
}
