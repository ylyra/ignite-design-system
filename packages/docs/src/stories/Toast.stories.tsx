import { Box, Button, Toast, ToastProps, useToast } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const ToastChildren = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Toast Title",
          description: "Toast Description",
        })
      }
    >
      Open toast
    </Button>
  );
};

const ToastChildrenAsError = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Toast Title",
          description: "Toast Description",
          status: "error",
        })
      }
    >
      Open toast
    </Button>
  );
};

export default {
  title: "Data Display/Toast Provider",
  component: Toast,
  args: {
    children: [<ToastChildren />],
  },
  argTypes: {
    position: {
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      defaultValue: "top-right",
      control: {
        type: "select",
      },
    },
    duration: {
      defaultValue: 5000,
      control: {
        type: "number",
        min: 0,
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
        {Story()}
      </Box>
    ),
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {},
};

export const OnBotton: StoryObj<ToastProps> = {
  args: {
    position: "bottom-right",
  },
};
