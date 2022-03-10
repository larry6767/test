import { ChakraProvider } from '@chakra-ui/react'
import { StoreContext } from 'storeon/react'
// local libs
import { store } from 'src/store'
import { globalStyles } from './global-styles'
import { BaseLayout } from 'src/components/layout/BaseLayout'
import { FormGenerator } from 'src/components/FormGenerator'

function App() {
  return (
    <ChakraProvider>
      {globalStyles}
      <StoreContext.Provider value={store}>
        <BaseLayout>
          <FormGenerator />
        </BaseLayout>
      </StoreContext.Provider>
    </ChakraProvider>
  )
}

export default App
