import type { Meta, StoryObj } from "@storybook/react";

function TypographyShowcase() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-[#253858] border-b border-[#EBECF0] pb-4">Tipografia</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Headings</h2>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs text-[#7A869A] mb-1">H1 — 24px / Semibold</p>
            <p className="text-2xl font-semibold text-[#253858]">Título Principal</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">H2 — 20px / Semibold</p>
            <p className="text-xl font-semibold text-[#253858]">Título Secundário</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">H3 — 16px / Semibold</p>
            <p className="text-base font-semibold text-[#253858]">Título Terciário</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Body</h2>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Body Large — 16px / Regular</p>
            <p className="text-base text-[#253858]">Texto de corpo grande para parágrafos principais</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Body — 14px / Regular</p>
            <p className="text-sm text-[#253858]">Texto de corpo padrão para a maioria dos elementos</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Body Small — 12px / Regular</p>
            <p className="text-xs text-[#505F79]">Texto de corpo pequeno para informações secundárias</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Labels & Captions</h2>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Label — 10px / Medium / Uppercase</p>
            <p className="text-[10px] font-medium text-[#7A869A] uppercase tracking-wide">LABEL DE CAMPO</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Caption — 12px / Regular</p>
            <p className="text-xs text-[#7A869A]">Legenda ou informação complementar</p>
          </div>
          <div>
            <p className="text-xs text-[#7A869A] mb-1">Link — 14px / Medium</p>
            <p className="text-sm font-medium text-[#0052CC] underline-offset-2 hover:underline cursor-pointer">Acessar resumo do aluno</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof TypographyShowcase> = {
  title: "Design System/Tipografia",
  component: TypographyShowcase,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TypographyShowcase>;

export const Showcase: Story = {};
