import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Design System/Botões",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Criar novo contrato",
    className: "bg-[#0052CC] hover:bg-[#0747A6] text-white font-semibold rounded-xl",
  },
};

export const PrimaryFullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button className="w-full h-12 bg-[#0052CC] hover:bg-[#0747A6] text-white text-sm font-semibold rounded-xl">
        Criar novo contrato
      </Button>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "outline",
    children: "Cancelar",
    className: "border-[#EBECF0] text-[#253858] rounded-xl",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Excluir",
    className: "rounded-xl",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Voltar",
    className: "text-[#0052CC]",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start p-8">
      <Button className="bg-[#0052CC] hover:bg-[#0747A6] text-white font-semibold rounded-xl px-6">
        Primary
      </Button>
      <Button variant="outline" className="border-[#EBECF0] text-[#253858] rounded-xl px-6">
        Secondary
      </Button>
      <Button variant="destructive" className="rounded-xl px-6">
        Destructive
      </Button>
      <Button variant="ghost" className="text-[#0052CC] px-6">
        Ghost
      </Button>
      <Button disabled className="bg-[#0052CC] text-white rounded-xl px-6 opacity-40">
        Disabled
      </Button>
    </div>
  ),
};
