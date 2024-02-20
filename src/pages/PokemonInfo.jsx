import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

function PokemonInfo() {
  let { pokemonID } = useParams()
  const [pokemon, setPokemon] = useState({})

  async function getPokemon(i) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const gender = await axios.get(` https://pokeapi.co/api/v2/gender/${i}`)
      const form = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon-form/${i}`
      )
      const pokemonData = response.data
      setPokemon({
        id: pokemonData.id,
        name: pokemonData.name,
        base_experience: pokemonData.base_experience,
        height: pokemonData.height,
        type: pokemonData.types[0].type.name,
        weight: pokemonData.weight,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        gender: gender.data.name
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPokemon(pokemonID)
  }, [pokemonID])

  return (
    <Box>
      <Heading m={'10px'} textAlign={'center'}>
        Pokemon Information
      </Heading>

      <Grid
        templateColumns={{
          lg: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          base: 'none',
          sm: 'none'
        }}
        templateRows={{
          lg: 'none',
          md: 'none',
          base: 'repeat(2, 1fr)',
          sm: 'repeat(2, 1fr)'
        }}
        gap={4}
      >
        <GridItem mx={{ lg: 5, md: 4, base: 2, sm: 0 }}>
          <Image
            src={pokemon.image}
            style={{
              filter: 'drop-shadow(30px 10px 4px hsl(48, 100%, 50%))'
            }}
            alt={pokemon.name}
          />
        </GridItem>
        <GridItem border={'2px solid #000000'}>
          <Heading textAlign={'center'}>{pokemon.name}</Heading>

          <Box overflowY={'auto'}>
            <Box mx={'1em'} my={4} fontWeight={'600'}>
              Basic Information:
              <Container size={'sm'}>Height: {pokemon.height}</Container>
              <Container size={'sm'}>Weight: {pokemon.weight}</Container>
              <Container size={'sm'}>
                Base Experience: {pokemon.base_experience}
              </Container>
              <Container size={'sm'}>Type: {pokemon.type}</Container>
              <Container size={'sm'}>Gender: {pokemon.gender}</Container>
            </Box>
          </Box>

          <Container textAlign={'center'}>
            <Link as={NavLink} to={'/'}>
              <Button mt={2} colorScheme='blue' size={'md'}>
                Go Back
              </Button>
            </Link>
          </Container>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default PokemonInfo
