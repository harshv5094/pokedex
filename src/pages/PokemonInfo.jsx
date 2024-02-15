import { Box, Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

function PokemonInfo() {
  let { pokemonID } = useParams()

  return (
    <Box>
      <Heading>Pokemon Info Page</Heading>
      {pokemonID}
    </Box>
  )
}

export default PokemonInfo
