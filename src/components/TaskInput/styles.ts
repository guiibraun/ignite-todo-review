import { styled } from '../../styles'

export const AddTaskForm = styled('form', {
  display: 'flex',
  marginTop: '-2rem',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '0.3rem',

  input: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    background: '$gray500',
    color: '$gray100',
    border: '1px solid $gray700',
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: 8,
  },

  button: {
    maxWidth: '5.625rem',
    border: 0,
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    gap: '0.5rem',
    borderRadius: 8,
    padding: '0.875rem',
    cursor: 'pointer',

    color: '$white',
    backgroundColor: '$blue500',
    fontWeight: 'bold',
  },
})
