import { useCallback, useState } from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
// local libs
import { FormGeneratorContainer } from './styles'
import { ConfigForm } from './ConfigForm'
import { Output } from './Output'

export const FormGenerator = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const openResultTab = useCallback(() => {
    setTabIndex(1)
  }, [])

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  return (
    <FormGeneratorContainer>
      <Tabs
        isFitted
        variant="enclosed"
        width="100%"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList mb="1em">
          <Tab>Config</Tab>
          <Tab>Result</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ConfigForm openResultTab={openResultTab} />
          </TabPanel>
          <TabPanel>
            <Output />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FormGeneratorContainer>
  )
}
