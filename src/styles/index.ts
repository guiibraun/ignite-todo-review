import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      purple500: '#8284FA',
      purple700: '#5E60CE',

      blue500: '#4EA8DE',
      blue700: '#1E6F9F',

      gray100: '#F2F2F2',
      gray200: '#D9D9D9',
      gray300: '#808080',
      gray400: '#333333',
      gray500: '#262626',
      gray600: '#1A1A1A',
      gray700: '#0D0D0D',

      red300: '#E25858',

      white: '#fff',
    },
  },
})
