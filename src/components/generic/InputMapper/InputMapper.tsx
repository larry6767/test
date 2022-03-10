import { FormLabel, Button } from '@chakra-ui/react'
// local libs
import { Form, FormItemWrapper } from './styles'
import { isNotCheckboxOrRadio, isRadio } from './helpers'
import { RadioComponent } from './RadioComponent'
import { InputComponent } from './InputComponent'
// types
import type { FormConfig } from 'src/store/formConfig'

export const InputMapper = ({ items }: FormConfig) => (
  <Form>
    {items.map((x, i) => (
      <FormItemWrapper key={i}>
        {isNotCheckboxOrRadio(x) && <FormLabel>{x.label}</FormLabel>}
        {isRadio(x) ? <RadioComponent {...x} /> : <InputComponent {...x} />}
      </FormItemWrapper>
    ))}
    <Button mt={4} ml="auto" colorScheme="teal" type="submit" isDisabled={true}>
      Submit
    </Button>
  </Form>
)
