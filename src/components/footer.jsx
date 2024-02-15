import { Box, Container, Image } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer>
      <Box
        textAlign={'center'}
        mt={'1em'}
        py={'3em'}
        bg={'hsl(48, 100%, 50%)'}
        bottom={0}
      >
        <Container textColor={'hsl(219, 52%, 44%)'} fontWeight={'700'}>
          © 2024 Harsh Vyapari. All Rights Reserved.
        </Container>
        <br />
        <Container display={'flex'} justifyContent={'center'} gap={3}>
          <SocialIcon
            network='github'
            url='https://github.com/harshv5094/pokedex'
          />
          <SocialIcon network='twitter' url='https://twitter.com/harshv5094' />
          <SocialIcon
            network='linkedin'
            url='https://www.linkedin.com/in/harshv5094/'
          />
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
