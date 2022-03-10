import { FormLabel } from '@chakra-ui/react'
// local libs
import { FormItemWrapper } from './styles'
import { isNotCheckboxOrRadio, isRadio } from './helpers'
import { RadioComponent } from './RadioComponent'
import { InputComponent } from './InputComponent'
// types
import type { InputMapperProps } from './types'

export const InputMapper = ({ inputs }: InputMapperProps) => (
  <>
    {inputs.map((x, i) => (
      <FormItemWrapper key={i}>
        {isNotCheckboxOrRadio(x) && <FormLabel>{x.label}</FormLabel>}
        {isRadio(x) ? <RadioComponent {...x} /> : <InputComponent {...x} />}
      </FormItemWrapper>
    ))}
  </>
)
