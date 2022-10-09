import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { keyframes, styled } from '../../styles';

export const CheckboxContainer = styled(RadixCheckbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSize: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray900',

  '&:focus': {
    border: '2px solid $ignite300'
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  }
});

const slideIn = keyframes({
  '0%': {
    transform: 'translateY(-100%)'
  },
  '80%': {
    transform: 'translateY(20%)'
  },
  '100%': {
    transform: 'translateY(0)'
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(-100%)'
  }
})

export const CheckboxIndicator = styled(RadixCheckbox.CheckboxIndicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  }
});