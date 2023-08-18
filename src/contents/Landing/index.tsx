import {
  Container,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
} from "@chakra-ui/react";

function LandingPage() {
  return (
    <Container maxWidth='full' centerContent>
      <Flex
        height='100dvh'
        maxWidth='1600px'
        justifyContent='space-between'
        alignItems='center'
        padding='auto'
        gap='72px'
      >
        <Box maxWidth='648px'>
          <Heading as='h3' size='2xl' color='#B08968'>
            Hi there, I'm
          </Heading>
          <Heading as='h1' fontSize='72px' color='#7F5539' paddingBottom='8px'>
            Nuttapol Phomthon
          </Heading>
          <Text as='em' fontSize='2xl' color='#B08968'>
            — I’m a platform service engineer specializing in building things
            for the web. Currently, I’m focused on building developer portal
            platform at &nbsp;
            <Link color='#7F5539' href='https://scbtechx.io/'>
              SCB TechX
            </Link>
            . —
          </Text>
        </Box>
        <Box maxWidth='480px'>
          <Image
            bgColor='#E6CCB2'
            borderRadius='full'
            src='src/assets/avatar.webp'
            alt='avatar'
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default LandingPage;
