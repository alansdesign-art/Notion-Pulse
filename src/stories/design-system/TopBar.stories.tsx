import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "@/components/TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Design System/Componentes/TopBar",
  component: TopBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: "Contrato 000000",
  },
};
