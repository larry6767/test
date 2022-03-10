import { Heading } from '@chakra-ui/react'
// local libs
import { useStoreon } from 'src/store'
import { Form, InputMapper, ButtonMapper, Alert } from 'src/components/generic'

export const Output = () => {
  const { formConfig } = useStoreon('formConfig')
  return !formConfig ? (
    <Alert status="info">
      You need to provide json config in the config tab
    </Alert>
  ) : (
    <Form>
      <Heading textAlign="center" mb={10}>
        {formConfig.formTitle}
      </Heading>
      <InputMapper inputs={formConfig.inputs} />
      <ButtonMapper buttons={formConfig.buttons}></ButtonMapper>
    </Form>
  )
}
