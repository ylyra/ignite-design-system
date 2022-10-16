import * as RadixTooltip from '@radix-ui/react-tooltip';
import { styled } from '../../styles';

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
});
export const Arrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
});