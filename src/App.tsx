import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// local libs
import { globalStyles } from './global-styles'
import { BaseLayout } from 'src/components/layout/BaseLayout'

function App() {
  return (
    <ChakraProvider>
      {globalStyles}
      <BaseLayout>test</BaseLayout>
    </ChakraProvider>
  )
}

export default App
