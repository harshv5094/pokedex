import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

function ChakraUI({ children }) {
  const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
  }

  const theme = extendTheme({ config })
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  )
}

export default ChakraUI
