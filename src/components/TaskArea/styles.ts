import { styled } from '../../styles'

export const TaskContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
})

export const TaskCreatedAndCompleted = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const TaskInfo = styled('div', {
  fontSize: '0.875rem',
  fontWeight: 'bold',

  span: {
    width: 24,
    height: 19,
    fontSize: '0.75rem',
    padding: '0.2rem 0.5rem',
    borderRadius: 40,
    background: '$gray400',
    color: '$gray200',
  },

  variants: {
    colors: {
      purple: {
        color: '$purple500',
      },
      blue: {
        color: '$blue500',
      },
    },
  },
})

export const TaskAreaContainer = styled('div', {
  marginTop: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})
