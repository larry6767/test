import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
// types
import type { RadioItem } from 'src/store/formConfig'

export const RadioComponent = ({ placeholder, name, items }: RadioItem) => {
  const defaultChecked = items.find(({ checked }) => checked)
  return (
    <RadioGroup defaultValue={defaultChecked?.id}>
      <FormLabel>{placeholder}</FormLabel>
      <Stack spacing={2} direction="column">
        {items.map(({ label, id }, i) => (
          <Radio key={i} value={id} name={name}>
            {label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}
