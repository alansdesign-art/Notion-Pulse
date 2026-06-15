import type { Meta, StoryObj } from "@storybook/react";
import { StudentCard } from "@/components/StudentCard";

const meta: Meta<typeof StudentCard> = {
  title: "Design System/Componentes/StudentCard",
  component: StudentCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof StudentCard>;

export const Ativo: Story = {
  args: {
    student: {
      name: "Erick Francis Matias Oliveira",
      email: "erick.francismo@gmail.com",
      cpf: "123.812.000-00",
      birthdate: "26/03/1987",
      id: "000001",
      registrationDate: "26/03/2022",
      studentSince: "3 anos",
      status: "ATIVO",
    },
  },
};

export const Inativo: Story = {
  args: {
    student: {
      name: "Maria da Silva",
      email: "maria.silva@gmail.com",
      cpf: "987.654.321-00",
      birthdate: "15/07/1990",
      id: "000002",
      registrationDate: "10/01/2023",
      studentSince: "1 ano",
      status: "INATIVO",
    },
  },
};
