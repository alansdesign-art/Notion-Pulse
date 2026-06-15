import type { Meta, StoryObj } from "@storybook/react";
import { ActionList } from "@/components/ActionList";

const meta: Meta<typeof ActionList> = {
  title: "Design System/Componentes/ActionList",
  component: ActionList,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ActionList>;

export const Contrato: Story = {
  args: {
    items: [
      { label: "Renovar contrato" },
      { label: "Upgrade de plano" },
      { label: "Downgrade de plano" },
      { label: "Rematrícula de contrato" },
    ],
  },
};

export const OneItem: Story = {
  args: {
    items: [{ label: "Renovar contrato" }],
  },
};
