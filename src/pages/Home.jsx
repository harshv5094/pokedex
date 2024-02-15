import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Link
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const quantity = 20
  const [pokeArray, setPokeArray] = useState([])

  const getAllPokemon = async quantity => {
    let pokeArray = []
    for (let i = 1; i <= quantity; i++) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        )
        pokeArray.push(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    setPokeArray(pokeArray)
  }

  useEffect(() => {
    getAllPokemon(quantity)
  }, [quantity])

  return (
    <Box>
      {}
      <Heading m={'10px'} textAlign={'center'}>
        Welcome to my Pokedex
      </Heading>

      <Box mx={{ lg: '15em', md: '10em', base: '5em', sm: '0em' }}>
        <Heading size={'16px'}>Search</Heading>
        <Input
          size={'md'}
          onChange={e => {
            if (e.target.value === '') {
              getAllPokemon(quantity)
            } else {
              setPokeArray(pokemon => {
                return pokemon.filter(pokemon =>
                  pokemon.name.includes(e.target.value.toLowerCase())
                )
              })
            }
          }}
        />
      </Box>
      <Grid
        templateColumns={{
          lg: 'repeat(3, 1fr)',
          md: 'repeat(2, 1fr)',
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)'
        }}
        gap={5}
        mx={{ lg: '10em', md: '5em', base: '0em', sm: '0em' }}
      >
        {pokeArray.map((pokemon, index) => {
          return (
            <GridItem key={index}>
              <Box border='green' borderWidth={'thick'}>
                <Heading>{pokemon.name}</Heading>
                <Link href={`/pokemon/${pokemon.id}`}>
                  <Button colorScheme='green' size={`md`}>
                    View Details
                  </Button>
                </Link>
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Home
