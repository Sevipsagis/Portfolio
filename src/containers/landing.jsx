import { route } from 'preact-router'

export default function Landing() {
    return (
        <section className="min-w-10/10 min-h-10/10 flex flex-wrap justify-center items-center snap-start">
            <div class="w-full min-h-9/10 bg-base-300 flex flex-wrap items-center justify-center md:justify-start">
                <div class="md:m-24">
                    <h1 class="uppercase text-5xl md:text-7xl font-medium text-secondary leading-tight motion-safe:animate-pulse">
                        Nuttapol
                    </h1>
                    <h1 class="uppercase text-5xl md:text-7xl font-medium text-secondary leading-tight motion-safe:animate-pulse">
                        Phomthon
                    </h1>
                    <hr class="border-t-4 border-base-content my-4" />
                    <h3 class="text-xl md:text-2xl font-light leading-tight">
                        {'< Software Developer />'}
                    </h3>
                    <h3 class="text-xl md:text-2xl font-light leading-tight">
                        {'< Technology Geek />'}
                    </h3>
                    <h3 class="text-xl md:text-2xl font-light leading-tight">
                        {'< Movie Lovers />'}
                    </h3>
                </div>
            </div>
        </section>
    )
}
