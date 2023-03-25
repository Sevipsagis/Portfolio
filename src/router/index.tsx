import { useEffect, useState } from 'react'
import { css, Container, Navbar } from '@nextui-org/react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import SplashScreen from './utilities/SplashScreen'

function Root() {
    const navigate = useNavigate()
    const location = useLocation()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                setIsLoaded(true)
            }
        }
    }, [])

    return isLoaded ? (
        <Container
            fluid
            css={{
                scrollSnapAlign: 'start',
            }}
        >
            <Navbar variant="sticky">
                <Navbar.Brand>
                    {/* <Text b color="inherit" hideIn="xs">
                        Sevipsagis
                    </Text> */}
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link
                        onClick={() => navigate('/')}
                        isActive={location.pathname === '/'}
                        activeColor="success"
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        onClick={() => navigate('/experience')}
                        isActive={location.pathname === '/experience'}
                        activeColor="success"
                    >
                        Experience
                    </Navbar.Link>
                    <Navbar.Link
                        onClick={() => navigate('/resume')}
                        isActive={location.pathname === '/resume'}
                        activeColor="success"
                    >
                        Resume
                    </Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <Outlet />
        </Container>
    ) : (
        <SplashScreen />
    )
}

export default Root
