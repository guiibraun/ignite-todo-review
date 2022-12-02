import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const TaskForm = styled('form', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  cursor: 'pointer',
  background: '$gray500',
  border: '1px solid $gray400',
  borderRadius: 8,
  padding: '1.05rem',

  '&>div': {
    display: 'grid',
    gridTemplateColumns: '1.1rem 1fr',
    gap: '1rem',

    flex: 1,
  },
})

export const TaskLabel = styled('label', {
  fontSize: '0.875rem',

  variants: {
    check: {
      isChecked: {
        textDecoration: 'line-through',
      },
      notChecked: {
        textDecoration: 'none',
      },
    },
  },
})

export const DeleteCommentButton = styled('button', {
  all: 'unset',

  '&:hover': {
    color: '$red300',
  },
})

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  width: 20,
  height: 20,
  border: '1px solid $blue500',
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state="checked"]': {
    background: '$blue500',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  display: 'flex',
  color: '$white',
  width: 17,
})
