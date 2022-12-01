import { styled } from '..'

export const HomeContainer = styled('div', {
  maxWidth: '46rem',
  margin: '0 auto',
})

export const AddTaskForm = styled('form', {
  display: 'flex',
  marginTop: '-2.84rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.3rem',

  input: {
    flex: 1,
    background: '$gray500',
    border: '1px solid $gray700',
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: 8,
  },

  button: {
    maxWidth: '5.625rem',
    border: 0,
    height: '100%',
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
