import React from 'react'
// local libs
import { BaseLayoutContainer } from './styles'
// types
import type { FC } from 'react'

export const BaseLayout: FC = ({ children }) => {
  return <BaseLayoutContainer>{children}</BaseLayoutContainer>
}
