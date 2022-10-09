import { Text, TextProps } from "@ignite-ui/react"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Testando o elemento Text"
  }
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong"
  }
}