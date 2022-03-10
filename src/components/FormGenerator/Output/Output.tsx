import { Alert, AlertIcon } from '@chakra-ui/react'
// local libs
import { useStoreon } from 'src/store'
import { InputMapper } from 'src/components/generic'

export const Output = () => {
  const { formConfig } = useStoreon('formConfig')
  return !formConfig ? (
    <Alert status="info">
      <AlertIcon />
      You need to provide json config in the config tab
    </Alert>
  ) : (
    <InputMapper items={formConfig.items} />
  )
}
