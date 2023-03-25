import { useEffect, useState } from 'react'
import { Navbar } from '@nextui-org/react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import SplashScreen from './utilities/SplashScreen'

function Root() {
    const navigate = useNavigate()
    const location = useLocation()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 1000)
    }, [])

    return isLoaded ? (
        <motion.div
            id="main"
            variants={{
                show: {
                    transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.2,
                    },
                },
            }}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    show: { opacity: 1, scale: 1 },
                }}
            >
                <Navbar
                    variant="sticky"
                    css={{ position: 'fixed', display: 'flex', justifyContent: 'center' }}
                >
                    <Navbar.Brand>
                        {/* <Text b color="inherit" hideIn="xs">
                        Sevipsagis
                    </Text> */}
                    </Navbar.Brand>
                    <Navbar.Content>
                        <Navbar.Link
                            onClick={() => navigate('/')}
                            isActive={location.pathname === '/'}
                            activeColor="primary"
                        >
                            About
                        </Navbar.Link>
                        <Navbar.Link
                            onClick={() => navigate('/experience')}
                            isActive={location.pathname === '/experience'}
                            activeColor="primary"
                        >
                            Experience
                        </Navbar.Link>
                        <Navbar.Link
                            onClick={() => navigate('/resume')}
                            isActive={location.pathname === '/resume'}
                            activeColor="primary"
                        >
                            Resume
                        </Navbar.Link>
                    </Navbar.Content>
                </Navbar>
                <Outlet />
            </motion.div>
        </motion.div>
    ) : (
        <SplashScreen />
    )
}

export default Root
