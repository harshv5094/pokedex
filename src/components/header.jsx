import { Box, Image } from '@chakra-ui/react'
import ThemeToggleButton from './themeToggleButton'
import PokeDexTitle from '../img/pokedex-icon.png'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function Header() {
  return (
    <Box
      bg={`hsl(48, 100%, 50%)`}
      display={`flex`}
      justifyContent={`space-between`}
      px={{ lg: 20, md: 10, base: 0, sm: 0 }}
    >
      <Box ml={{ lg: 5, md: 5, base: 0 }}>
        <ChakraLink as={ReactRouterLink} to='/'>
          <Image
            src={PokeDexTitle}
            width={{ lg: '15rem', base: '14rem', sm: '13rem' }}
            alt='Pokedex Icon'
          />
        </ChakraLink>
      </Box>

      <Box m={{ lg: 5, md: 5, base: 5 }}>
        <ThemeToggleButton />
      </Box>
    </Box>
  )
}

export default Header
