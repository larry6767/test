import { Heading, Button, Code, useClipboard } from '@chakra-ui/react'
// local libs
import { Alert } from 'src/components/generic'
import { jsonForTests } from './assets/fixtures'

export const FormText = () => {
  const { hasCopied, onCopy } = useClipboard(jsonForTests)

  return (
    <>
      <Heading textAlign="center" mb={10}>
        Configuration form
      </Heading>
      <Alert status="info" borderBottomRadius={0}>
        You can use the json below for testing
      </Alert>
      <Code borderBottomRadius={8} mb={10} padding={4}>
        <Button onClick={onCopy} float="right" margin={1} colorScheme="blue">
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
        {jsonForTests}
      </Code>
    </>
  )
}
