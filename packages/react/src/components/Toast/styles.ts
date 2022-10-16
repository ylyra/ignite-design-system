import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from "../../styles";

const VIEWPORT_PADDING = 24;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 310,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  variants: {
    position: {
      "top-right": {
        top: 0,
        right: 0,
      }, 
      "top-left": {
        top: 0,
        left: 0,
      }, 
      "bottom-right": {
        bottom: 0,
        right: 0,
      }, 
      "bottom-left": {
        bottom: 0,
        left: 0,
      }
    }
  },

  defaultVariants: {
    position: "top-right"
  }
});

export const Container = styled(Toast.Root, {
  position: 'relative',
  borderRadius: '$sm',
  background: '$gray800',
  border: '1px solid $gray600',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },

  variants: {
    type: {
      "info": {
      },
      "success": {
        borderColor: '$ignite300',
        background: '$ignite900',
      },
      "warning": {
        borderColor: '#FFB54D',
        background: '#E68600',
      },
      "error": {
        borderColor: '#E57184',
        background: '#B51C36',
      }
    }
  }
});

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  justifyContent: 'space-between',
  
  button: {
    margin: 0,
    border: 'none',
    background: 'none',
    color: '$gray200',
    cursor: 'pointer',
    lineHeight: 0,
    padding: '$1',
    borderRadius: '$px',

    '&:focus': {
      boxShadow: '0 0 0 3px $colors$ignite100',
    }
  }
});

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  fontWeight: '$normal',
});

export const Action = styled(Toast.Action, {
  color: '$primary_600',
  marginTop: '$xxxs',
});

export const Close = styled(Toast.Close, {});
export const Trigger = styled('div', {});