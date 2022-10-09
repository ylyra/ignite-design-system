import { Heading, HeadingProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Testando o elemento Heading",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "select" },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong Heading",
    as: "h4",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas você pode alterar isso usando a prop `as`.",
      },
    },
  },
};
