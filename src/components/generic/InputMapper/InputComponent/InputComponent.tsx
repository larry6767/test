import { Input, Textarea, Checkbox } from '@chakra-ui/react'
// types
import { InputTypeEnum } from 'src/store/formConfig'
import type { InputItem } from 'src/store/formConfig'

export const InputComponent = ({ type, label, ...rest }: InputItem) => {
  const itemsMappig: Record<
    Exclude<InputTypeEnum, InputTypeEnum.radio>,
    JSX.Element
  > = {
    [InputTypeEnum.numberfield]: <Input type="number" {...rest} />,
    [InputTypeEnum.textfield]: <Input type="text" {...rest} />,
    [InputTypeEnum.textarea]: <Textarea {...rest} />,
    [InputTypeEnum.checkbox]: <Checkbox {...rest}>{label}</Checkbox>,
    [InputTypeEnum.dateflied]: <Input type="date" {...rest} />,
  }
  return itemsMappig[type]
}
