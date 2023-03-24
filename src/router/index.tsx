import { Navbar, Text } from '@nextui-org/react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Root() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <Navbar variant="sticky">
                <Navbar.Brand>
                    {/* <Text b color="inherit" hideIn="xs">
                        Sevipsagis
                    </Text> */}
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link
                        onClick={() => navigate('/')}
                        isActive={location.pathname === '/'}
                        activeColor="secondary"
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        onClick={() => navigate('/experience')}
                        isActive={location.pathname === '/experience'}
                        activeColor="secondary"
                    >
                        Experience
                    </Navbar.Link>
                    <Navbar.Link
                        onClick={() => navigate('/resume')}
                        isActive={location.pathname === '/resume'}
                        activeColor="secondary"
                    >
                        Resume
                    </Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Root
