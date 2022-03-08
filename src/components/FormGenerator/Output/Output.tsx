import React from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'
// local libs
import { useStoreon } from 'src/store'

export const Output = () => {
  const { formConfig } = useStoreon('formConfig')
  return !formConfig ? (
    <Alert status="info">
      <AlertIcon />
      You need to provide json config in the config tab
    </Alert>
  ) : (
    <div>{JSON.stringify(formConfig, null, 4)}</div>
  )
}
