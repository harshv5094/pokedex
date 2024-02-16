import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/loader'
import { NavLink } from 'react-router-dom'

function Home() {
  const [quantity, setQuantity] = useState(40)
  const [pokeArray, setPokeArray] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllPokemon = async quantity => {
    setIsLoading(true)
    let pokeArray = []
    for (let i = 1; i <= quantity; i++) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        )
        pokeArray.push(response.data)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    setPokeArray(pokeArray)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllPokemon(quantity)
  }, [quantity])

  return (
    <Box>
      <Heading m={'10px'} textAlign={'center'}>
        Welcome to my Pokedex
      </Heading>

      <Box
        display={'flex'}
        flexDirection={{ lg: 'row', md: 'row', base: 'column', sm: 'column' }}
        mx={{ lg: '15em', md: '10em', base: '5em', sm: '0em' }}
        gap={5}
      >
        <Heading size={'16px'}>Search</Heading>
        <Input
          size={'md'}
          placeholder={'Search Pokemon'}
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
        <Heading size={'16px'}>Quantity</Heading>
        <Input
          size={'md'}
          placeholder={'Enter Quantity'}
          value={quantity}
          onChange={e => {
            setQuantity(e.target.value)
          }}
        />
      </Box>
      {isLoading && <Loader isLoading={isLoading} />}
      <Grid
        templateColumns={{
          lg: 'repeat(3, 1fr)',
          md: 'repeat(2, 1fr)',
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)'
        }}
        gap={5}
        my={5}
        mx={{ lg: '10em', md: '5em', base: '0em', sm: '0em' }}
      >
        {pokeArray.map((pokemon, index) => {
          const pokemonFrontImage =
            pokemon.sprites.other['official-artwork'].front_default
          return (
            <GridItem border={'2px solid black'} p={2} key={index}>
              <Box border='green' borderWidth={'thick'} mx={5}>
                <Image
                  loading='lazy'
                  src={pokemonFrontImage}
                  style={{
                    filter: 'drop-shadow(30px 10px 4px hsl(240, 69%, 57%))'
                  }}
                  alt={pokemon.name}
                />
                <Heading>{pokemon.name}</Heading>
                <Link as={NavLink} to={`/pokemon/${pokemon.id}`}>
                  <Button mt={2} colorScheme='green' size={`md`}>
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
