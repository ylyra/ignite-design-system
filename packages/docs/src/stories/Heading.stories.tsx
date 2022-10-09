import { Heading, HeadingProps } from "@ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Testando o elemento Heading"
  }
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong Heading",
    as: "h4"
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas você pode alterar isso usando a prop `as`.'
      }
    }
  }
}