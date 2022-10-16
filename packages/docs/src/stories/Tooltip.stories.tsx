import { Box, Text, Tooltip, TooltipProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    children: [
      <Tooltip.Trigger>
        <Text>Tooltip</Text>
      </Tooltip.Trigger>,
      <Tooltip.Portal>
        <Tooltip.Content>
          <Text>Tooltip Content</Text>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>,
    ],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    delayDuration: {
      min: 0,
      defaultValue: 700,
      control: {
        type: "number",
      },
    },
    defaultOpen: {
      control: {
        type: "boolean",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$2",
        }}
      >
        <Tooltip.Provider>{Story()}</Tooltip.Provider>
      </Box>
    ),
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {},
};

export const WithDelay: StoryObj<TooltipProps> = {
  args: {
    delayDuration: 2000,
  },
};

export const WithoutArrow: StoryObj<TooltipProps> = {
  args: {
    delayDuration: 0,
    children: [
      <Tooltip.Trigger>
        <Text>Tooltip</Text>
      </Tooltip.Trigger>,
      <Tooltip.Portal>
        <Tooltip.Content>
          <Text>Tooltip Content</Text>
        </Tooltip.Content>
      </Tooltip.Portal>,
    ],
  },
};
