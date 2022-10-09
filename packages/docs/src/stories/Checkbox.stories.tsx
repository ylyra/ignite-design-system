import { Box, Checkbox, CheckboxProps, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: "flex",
          flexDirection: "row",
          gap: "$2",
          alignItems: "center",
        }}
      >
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
