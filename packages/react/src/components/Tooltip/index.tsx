import * as RadixTooltip from "@radix-ui/react-tooltip";
import { Arrow, Content, Root, Trigger } from "./styles";

export type TooltipProps = RadixTooltip.TooltipProps & {};

export function Tooltip({ children, ...props }: TooltipProps) {
  return <Root {...props}>{children}</Root>;
}

Tooltip.displayName = "Tooltip";

Tooltip.Provider = RadixTooltip.Provider;
Tooltip.Provider.displayName = "Tooltip.Provider";

Tooltip.Portal = RadixTooltip.Portal;
Tooltip.Portal.displayName = "Tooltip.Portal";

Tooltip.Trigger = Trigger;
Tooltip.Trigger.displayName = "Tooltip.Trigger";

Tooltip.Content = Content;
Tooltip.Content.displayName = "Tooltip.Content";

Tooltip.Arrow = Arrow;
Tooltip.Arrow.displayName = "Tooltip.Arrow";
