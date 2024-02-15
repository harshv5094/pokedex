import { Box, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonInfo() {
  let { pokemonID } = useParams()
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async pokemonID => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
      )
      setPokemon(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPokemon(pokemonID)
  }, [pokemonID])

  return (
    <Box>
      <Heading>Pokemon Info Page</Heading>
      {pokemon.name}
    </Box>
  )
}

export default PokemonInfo
