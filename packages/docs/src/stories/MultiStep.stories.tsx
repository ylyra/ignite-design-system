import { Box, MultiStep, MultiStepProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta;

export const Primary: StoryObj<MultiStepProps> = {};
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
