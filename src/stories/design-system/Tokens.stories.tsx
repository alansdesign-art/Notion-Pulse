import type { Meta, StoryObj } from "@storybook/react";

function TokensShowcase() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-[#253858] border-b border-[#EBECF0] pb-4">Tokens de Design</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Espaçamento</h2>
        <div className="flex flex-col gap-2">
          {[
            { name: "spacing-1", value: "4px", px: 4 },
            { name: "spacing-2", value: "8px", px: 8 },
            { name: "spacing-3", value: "12px", px: 12 },
            { name: "spacing-4", value: "16px", px: 16 },
            { name: "spacing-6", value: "24px", px: 24 },
            { name: "spacing-8", value: "32px", px: 32 },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#505F79] w-24">{s.name}</span>
              <div className="h-6 bg-[#0052CC] opacity-30 rounded" style={{ width: s.px }} />
              <span className="text-xs text-[#7A869A]">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Border Radius</h2>
        <div className="flex gap-6 flex-wrap">
          {[
            { name: "radius-sm", value: "6px", cls: "rounded" },
            { name: "radius-md", value: "8px", cls: "rounded-md" },
            { name: "radius-lg", value: "12px", cls: "rounded-xl" },
            { name: "radius-full", value: "9999px", cls: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 bg-[#0052CC] opacity-20 border-2 border-[#0052CC] ${r.cls}`} />
              <span className="text-xs font-mono text-[#505F79]">{r.name}</span>
              <span className="text-xs text-[#7A869A]">{r.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-[#7A869A] uppercase tracking-widest">Sombras</h2>
        <div className="flex gap-6 flex-wrap">
          {[
            { name: "shadow-sm", cls: "shadow-sm" },
            { name: "shadow-md", cls: "shadow-md" },
            { name: "shadow-lg", cls: "shadow-lg" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div className={`w-20 h-20 bg-white rounded-xl ${s.cls}`} />
              <span className="text-xs font-mono text-[#505F79]">{s.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof TokensShowcase> = {
  title: "Design System/Tokens",
  component: TokensShowcase,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TokensShowcase>;

export const Showcase: Story = {};
