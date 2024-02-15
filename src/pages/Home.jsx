import { Box, Button, Grid, GridItem, Heading, Link } from '@chakra-ui/react'
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
      <Heading m={'10px'} textAlign={'center'}>
        Home Page
      </Heading>

      <Grid templateColumns={'repeat(3, 2fr)'} gap={5}>
        {pokeArray.map((pokemon, index) => {
          return (
            <GridItem key={index}>
              <Heading>{pokemon.name}</Heading>
              <Link href={`/pokemon/${pokemon.id}`}>
                <Button colorScheme='green' size={`md`}>
                  View Details
                </Button>
              </Link>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Home
