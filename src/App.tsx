import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// local libs
import { globalStyles } from './global-styles'
import { BaseLayout } from 'src/components/layout/BaseLayout'
import { FormGenerator } from 'src/components/FormGenerator'

function App() {
  return (
    <ChakraProvider>
      {globalStyles}
      <BaseLayout>
        <FormGenerator />
      </BaseLayout>
    </ChakraProvider>
  )
}

export default App
