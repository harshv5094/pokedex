import { Box } from '@chakra-ui/react'

function Loader({ isLoading }) {
  return (
    <Box>
      {isLoading && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={{ lg: '80vw', md: '100vw', base: '100vw', sm: '100vw' }}
          height={{ lg: '80vh', md: '80vh', base: '60vh', sm: '60vh' }}
        >
          <Box className='loader'></Box>
        </Box>
      )}
    </Box>
  )
}

export default Loader
