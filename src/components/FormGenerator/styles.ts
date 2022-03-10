import styled from '@emotion/styled'

export const FormGeneratorContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 30px * 6);
  margin: 30px auto;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`
