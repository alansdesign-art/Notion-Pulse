import type { Meta, StoryObj } from "@storybook/react";

type Scale = {
  token: string;
  cls: string;
  weight: string;
  size: string;
  font: string;
  sample?: string;
};

const displayScale: Scale[] = [
  { token: "Display 1", cls: "text-display-1", weight: "ExtraBold / Bold / Light", size: "64px / 4rem", font: "Margins" },
  { token: "Display 2", cls: "text-display-2", weight: "ExtraBold / Bold / Light", size: "54px / 3.375rem", font: "Margins" },
  { token: "Display 3", cls: "text-display-3", weight: "ExtraBold / Bold / Italic", size: "46px / 2.875rem", font: "Margins" },
];
const highlightScale: Scale[] = [
  { token: "Highlight 1", cls: "text-highlight-1", weight: "Bold", size: "36px / 2.25rem", font: "Margins" },
  { token: "Highlight 2", cls: "text-highlight-2", weight: "Bold", size: "28px / 1.75rem", font: "Margins" },
];
const headlineScale: Scale[] = [
  { token: "Headline 1", cls: "text-headline-1", weight: "Bold", size: "24px / 1.5rem", font: "Margins" },
  { token: "Headline 2", cls: "text-headline-2", weight: "Medium", size: "22px / 1.375rem", font: "Margins" },
  { token: "Headline 3", cls: "text-headline-3", weight: "Medium", size: "20px / 1.25rem", font: "Margins" },
  { token: "Headline 4", cls: "text-headline-4", weight: "Medium", size: "18px / 1.125rem", font: "Margins" },
];
const bodyScale: Scale[] = [
  { token: "Body 1", cls: "text-body-1", weight: "Regular", size: "20px / 1.25rem", font: "Montserrat" },
  { token: "Body 2", cls: "text-body-2", weight: "Regular", size: "18px / 1.125rem", font: "Montserrat" },
  { token: "Body 3", cls: "text-body-3", weight: "Regular", size: "16px / 1rem", font: "Montserrat" },
  { token: "Body 4", cls: "text-body-4", weight: "Regular / Uppercase", size: "14px / 0.875rem", font: "Montserrat", sample: "TEXTO EM UPPERCASE" },
];
const weights = [
  { name: "Light", value: "300", tw: "font-light" },
  { name: "Regular", value: "400", tw: "font-normal" },
  { name: "Medium", value: "500", tw: "font-medium" },
  { name: "Bold", value: "700", tw: "font-bold" },
  { name: "ExtraBold", value: "800", tw: "font-extrabold" },
];

function Row({ item }: { item: Scale }) {
  return (
    <div className="py-6 border-b border-[#EBECF0] flex gap-8 items-start">
      <div className="flex-1">
        <p className={`${item.cls} font-bold text-[#253858]`}>
          {item.sample ?? "Quem faz Gran aprova!"}
        </p>
      </div>
      <div className="flex flex-col gap-1 text-xs text-[#505F79] w-64">
        <span className="font-mono bg-[#F4F5F7] px-2 py-0.5 rounded w-fit">.{item.cls}</span>
        <span>{item.font} · {item.size}</span>
        <span className="text-[#7A869A]">{item.weight}</span>
      </div>
    </div>
  );
}

function TypographyShowcase() {
  return (
    <div className="p-10 max-w-4xl mx-auto flex flex-col gap-12">
      <div>
        <h1 className="text-2xl font-bold text-[#253858] mb-1">Tipografia — Gran Berry</h1>
        <p className="text-sm text-[#505F79]">
          Font primária: <strong>Margins</strong> (Gran) · Font secundária: <strong>Montserrat</strong>
        </p>
      </div>

      <section>
        <h2 className="text-xs font-semibold text-[#7A869A] uppercase tracking-widest mb-2">Display</h2>
        {displayScale.map((i) => <Row key={i.token} item={i} />)}
      </section>

      <section>
        <h2 className="text-xs font-semibold text-[#7A869A] uppercase tracking-widest mb-2">Highlight</h2>
        {highlightScale.map((i) => <Row key={i.token} item={i} />)}
      </section>

      <section>
        <h2 className="text-xs font-semibold text-[#7A869A] uppercase tracking-widest mb-2">Headline</h2>
        {headlineScale.map((i) => <Row key={i.token} item={i} />)}
      </section>

      <section>
        <h2 className="text-xs font-semibold text-[#7A869A] uppercase tracking-widest mb-2">Body</h2>
        {bodyScale.map((i) => <Row key={i.token} item={i} />)}
      </section>

      <section>
        <h2 className="text-xs font-semibold text-[#7A869A] uppercase tracking-widest mb-4">Pesos</h2>
        <div className="flex flex-col gap-4">
          {weights.map((w) => (
            <div key={w.name} className="flex items-baseline gap-6">
              <span className="text-xs font-mono text-[#7A869A] w-28">{w.name} / {w.value}</span>
              <span className={`text-2xl text-[#253858] ${w.tw}`} style={{ fontFamily: "var(--font-display)" }}>
                Aa Margins
              </span>
              <span className={`text-2xl text-[#505F79] ${w.tw}`} style={{ fontFamily: "var(--font-body)" }}>
                Aa Montserrat
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof TypographyShowcase> = {
  title: "Design System/Tipografia",
  component: TypographyShowcase,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TypographyShowcase>;
export const Showcase: Story = {};
