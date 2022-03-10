import styled from '@emotion/styled'
// types
import type { FormProps } from './types'

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  margin: auto;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  padding: 30px;
  max-width: ${({ maxWidth }) => maxWidth || '400px'};
`
