import { Box } from '@chakra-ui/react'

function Loader({ isLoading }) {
  return (
    <Box>
      {isLoading && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'90vw'}
          height={'100vh'}
        >
          <Box className='loader'></Box>
        </Box>
      )}
    </Box>
  )
}

export default Loader
