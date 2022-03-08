import styled from '@emotion/styled'

export const BaseLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 30px * 2);
  margin: 30px auto;
  padding: 30px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray[200]};
`
