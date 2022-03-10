import { Alert as ChakraAlert, AlertIcon } from '@chakra-ui/react'
// types
import type { FC } from 'react'
import type { AlertProps } from './types'

export const Alert: FC<AlertProps> = ({
  status,
  borderBottomRadius,
  children,
}) => {
  return (
    <ChakraAlert
      status={status}
      borderRadius={8}
      borderBottomRadius={borderBottomRadius}
    >
      <AlertIcon />
      {children}
    </ChakraAlert>
  )
}
