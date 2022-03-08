import React from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
// local libs
import { FormGeneratorContainer } from './styles'
import { ConfigForm } from './ConfigForm'

export const FormGenerator = () => {
  return (
    <FormGeneratorContainer>
      <Tabs isFitted variant="enclosed" width="100%">
        <TabList mb="1em">
          <Tab>Config</Tab>
          <Tab>Result</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ConfigForm />
          </TabPanel>
          <TabPanel>
            <p>result!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FormGeneratorContainer>
  )
}