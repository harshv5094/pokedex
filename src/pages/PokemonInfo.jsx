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
import Loader from '../components/loader'

function PokemonInfo() {
  let { pokemonID } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getPokemon(i) {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const pokemonData = response.data
      console.log(pokemonData)
      setPokemon(() => ({
        id: pokemonData.id,
        name: pokemonData.name,
        base_experience: pokemonData.base_experience,
        height: pokemonData.height,
        typeOne: pokemonData.types[0].type.name,
        typeTwo: pokemonData.types[1]?.type.name,
        weight: pokemonData.weight,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defense: pokemonData.stats[2].base_stat,
        'special-attack': pokemonData.stats[3].base_stat,
        'special-defense': pokemonData.stats[4].base_stat,
        speed: pokemonData.stats[5].base_stat,
        abilityOne: pokemonData.abilities[0].ability.name,
        abilityTwo: pokemonData.abilities[1].ability.name
      }))
      setPokemonMoves(() => pokemonData.moves)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      alert(error.message)
      setIsLoading(false)
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

      {isLoading && <Loader isLoading={isLoading} />}
      <Grid
        templateColumns={{
          lg: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          base: 'none',
          sm: 'none'
        }}
        gap={{ lg: 6, md: 2, base: 2, sm: 0 }}
      >
        <GridItem>
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
          <Box
            display={'grid'}
            gridTemplateColumns={{ base: 'repeat(2, 1fr)' }}
            overflow={'auto'}
          >
            <Box mx={'1em'} my={4}>
              <Heading as={'span'} fontSize={'20px'}>
                Basic Information:
              </Heading>
              <Container size={'sm'}>Height: {pokemon.height}</Container>
              <Container size={'sm'}>Weight: {pokemon.weight}</Container>
              <Container size={'sm'}>
                Base Experience: {pokemon.base_experience}
              </Container>
              <Container size={'sm'}>
                Type:{' '}
                {`${pokemon.typeOne}${pokemon.typeTwo === undefined ? '' : `, ${pokemon.typeTwo}`}`}
              </Container>
            </Box>
            <Box mx={'1em'} py={4}>
              <Heading as={'span'} fontSize={'20px'}>
                Stats:
              </Heading>
              <Container size={'sm'}>HP: {pokemon.hp}</Container>
              <Container size={'sm'}>Attack: {pokemon.attack}</Container>
              <Container size={'sm'}>Defense: {pokemon.defense}</Container>
              <Container size={'sm'}>
                Special Attack: {pokemon['special-attack']}
              </Container>
              <Container size={'sm'}>
                Special Defense: {pokemon['special-defense']}
              </Container>
              <Container size={'sm'}>Speed: {pokemon.speed}</Container>
            </Box>
            <Box mx={'1em'} py={4}>
              <Heading as={'span'} fontSize={'20px'}>
                Abilities:
              </Heading>
              <Container size={'sm'}>
                <ul>
                  <li>{pokemon.abilityOne}</li>
                  <li>{pokemon.abilityTwo}</li>
                </ul>
              </Container>
            </Box>
            <Box mx={'1em'} py={4}>
              <Heading as={'span'} fontSize={'20px'}>
                Moves:
              </Heading>
              <Container gap={1} size={'sm'}>
                {pokemonMoves.map((pokemon, index) => {
                  if (index <= 9) {
                    return <div key={index}>{pokemon.move.name}</div>
                  }
                })}
              </Container>
            </Box>
          </Box>

          <Container mb={2} textAlign={'center'}>
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
