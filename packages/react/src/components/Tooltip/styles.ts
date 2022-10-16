import * as RadixTooltip from '@radix-ui/react-tooltip';
import { keyframes, styled } from '../../styles';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Root = styled(RadixTooltip.Root, {});
export const Trigger = styled(RadixTooltip.Trigger, {
  all: 'unset',
  width: 'fit-content'
});
export const Content = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  borderRadius: '$xs',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});
export const Arrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
});