import profilePicture from '../../assets/images/profile_sm.webp'

export default function About() {
    return (
        <section className="min-w-10/10 max-w-10/10 min-h-10/10 max-h-10/10 flex flex-wrap justify-center items-center snap-start">
            <div class="w-full min-h-10/10 max-h-10/10 bg-base-300 p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-start overflow-hidden">
                <div class="relative flex flex-wrap justify-center items-center w-10/12 lg:w-6/12">
                    <img
                        src={profilePicture}
                        alt="Nuttapol_Phomthon_Profile_Picture"
                        width="480"
                        height="480"
                        class="w-11/12 md:w-10/12 lg:w-12/12 h-auto mr-auto ml-auto"
                    />
                    <h1
                        class="absolute uppercase font-semibold text-accent-focus leading-tight text-xl md:text-4xl 2xl:text-8xl mt-6 md:mt-12 2xl:mt-24 drop-shadow-xl"
                        style={{
                            transform: 'rotate(-10deg)',
                        }}
                    >
                        Hello, World!
                    </h1>
                </div>
                <div class="w-10/12 lg:w-6/12 ml-auto mr-auto p-1 md:p-8">
                    <h1 class="uppercase text-accent-focus text-2xl md:text-5xl font-medium leading-tight md:mb-1">
                        Nuttapol Phomthon
                    </h1>
                    <h2 class="text-xl md:text-3xl font-base leading-tight mb-8">@sevipsagis</h2>
                    <p class="text-lg md:text-2xl font-light leading-tight mb-8 indent-6">
                        Hi guys, You can call me <b class="text-accent-focus">Benz</b>. Actually,
                        I'm graduated in the field of Multimedia and Game Development but I fall in
                        love with Web Technologies so that is why I'm working as{' '}
                        <b class="text-accent-focus">Software Engineer</b>.
                    </p>
                    <div class="w-full flex flex-wrap">
                        <button
                            class="btn btn-circle hover:text-accent-focus text-xl mr-2 md:mr-4"
                            aria-label="Facebook"
                            onClick={() =>
                                (window.location.href = 'https://www.facebook.com/nattapon.benz.np')
                            }
                        >
                            <i class="ri-facebook-circle-fill" alt="facebook-logo"></i>
                        </button>
                        <button
                            class="btn btn-circle hover:text-accent-focus text-xl mr-2 md:mr-4"
                            aria-label="LinkedIn"
                            onClick={() =>
                                (window.location.href = 'https://www.linkedin.com/in/npbenz')
                            }
                        >
                            <i class="ri-linkedin-box-fill" alt="linkedin-logo"></i>
                        </button>
                        <button
                            class="btn btn-circle hover:text-accent-focus text-xl mr-2 md:mr-4"
                            aria-label="Github"
                            onClick={() =>
                                (window.location.href = 'https://www.github.com/Sevipsagis')
                            }
                        >
                            <i class="ri-github-fill" alt="github-logo"></i>
                        </button>
                        <button
                            class="btn btn-circle hover:text-accent-focus text-xl mr-2 md:mr-4"
                            aria-label="Send Email"
                            onClick={() => (window.location.href = 'mailto: sevipsagis@gmail.com')}
                        >
                            <i class="ri-mail-line" alt="mail-logo"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
