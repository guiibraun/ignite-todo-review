import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    ':focus': {
      outline: '1px solid $blue500',
    },

    body: {
      color: '$gray300',
      background: '$gray600',
    },

    'body, input, button, textarea': {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },

    '@media (max-width: 767px)': {
      html: {
        fontSize: '87.5%',
      },
    },

    button: {
      lineHeight: 0,
    },
  },
})
