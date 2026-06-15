import type { Meta, StoryObj } from "@storybook/react";
import { SectionMessage } from "@/components/SectionMessage";
import { StudentCard } from "@/components/StudentCard";
import { ActionList } from "@/components/ActionList";
import { TopBar } from "@/components/TopBar";

// ---- SectionMessage ----
const sectionMeta: Meta<typeof SectionMessage> = {
  title: "Design System/Componentes/SectionMessage",
  component: SectionMessage,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default sectionMeta;

export const Default: StoryObj<typeof SectionMessage> = {
  args: {
    message: "Aluno identificado pelo e-mail dos ticket.",
    linkText: "Acessar resumo do aluno",
  },
};
