import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { theme } from '@chakra-ui/react'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}

      html,
      body {
        padding: 0;
        margin: 0;
        background: ${theme.colors.gray[50]};
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
      }

      html,
      body,
      button,
      input,
      textarea {
        font-family: Arial, Helvetica, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)
