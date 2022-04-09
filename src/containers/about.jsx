import { route } from 'preact-router'

export default function About(props) {
    return (
        <div class="w-full min-h-full bg-base-300 flex flex-wrap items-center justify-center md:justify-start">
            <div class="min-w-10/10 min-h-5/10 bg-base-100 lg:min-w-5/10 lg:min-h-10/10"></div>
            <div class="min-w-10/10 min-h-5/10 bg-base-300 lg:min-w-5/10 lg:min-h-10/10"></div>
            <button
                class="btn btn-circle text-lg text-accent hover:border hover:border-solid hover:border-accent absolute top-1/20 inset-x-0 mx-auto motion-safe:animate-pulse duration-1000"
                onClick={() => route('/')}
            >
                <i class="ri-arrow-up-line"></i>
            </button>
            <button
                class="btn btn-circle text-lg text-accent hover:border hover:border-solid hover:border-accent absolute bottom-1/20 inset-x-0 mx-auto motion-safe:animate-pulse duration-1000"
                onClick={() => route('/experience')}
            >
                <i class="ri-arrow-down-line"></i>
            </button>
        </div>
    )
}
