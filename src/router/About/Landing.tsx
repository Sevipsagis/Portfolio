import { css, Container, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

import staticText from '../utilities/staticText'

const greenGradient = '45deg, $purple600 -40%, $blue600 40%'
const yellowGradient = '45deg, $red600 -40%, $purple600 40%'

function Landing() {
    return (
        <Container
            css={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                scrollSnapAlign: 'start !important',
            }}
        >
            <Container>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        show: { opacity: 1, scale: 1 },
                    }}
                >
                    <Text
                        h1
                        size={64}
                        css={{ textGradient: greenGradient }}
                        weight="semibold"
                        transform="capitalize"
                    >
                        {`${staticText.FIRST_NAME} ${staticText.LAST_NAME}`}
                    </Text>
                    <Text h5 size={24} weight="normal" css={{ textGradient: yellowGradient }}>
                        {'<Software Developer />'}
                    </Text>
                    <Text h5 size={24} weight="normal" css={{ textGradient: yellowGradient }}>
                        {'<Technology Geek />'}
                    </Text>
                    <Text h5 size={24} weight="normal" css={{ textGradient: yellowGradient }}>
                        {'<INFP Personality />'}
                    </Text>
                </motion.div>
            </Container>
        </Container>
    )
}

export default Landing
