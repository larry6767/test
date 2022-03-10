import { Button } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
// types
import type { ButtonMapperProps } from './types'

export const ButtonMapper = ({ buttons }: ButtonMapperProps) => (
  <ButtonGroup gap={2}>
    {buttons.map(({ type, value, isDisabled }, i) => (
      <Button
        key={i}
        mt={4}
        ml="auto"
        colorScheme="teal"
        type={type}
        value={value}
        isDisabled={isDisabled}
      >
        {value}
      </Button>
    ))}
  </ButtonGroup>
)
