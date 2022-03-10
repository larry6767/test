import { Button } from '@chakra-ui/react'
// local libs
import { ButtonsWrapper, ButtonWrapper } from './styles'
// types
import type { ButtonMapperProps } from './types'

export const ButtonMapper = ({ buttons }: ButtonMapperProps) => (
  <ButtonsWrapper>
    {buttons.map(({ type, value, isDisabled }, i) => (
      <ButtonWrapper key={i}>
        <Button
          mt={4}
          ml="auto"
          colorScheme="teal"
          type={type}
          value={value}
          isDisabled={isDisabled}
        >
          {value}
        </Button>
      </ButtonWrapper>
    ))}
  </ButtonsWrapper>
)
