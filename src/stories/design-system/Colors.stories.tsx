import type { Meta, StoryObj } from "@storybook/react";

const colors = [
  { name: "Primary Blue", value: "#0052CC", token: "--color-primary-blue" },
  { name: "Primary Blue Dark", value: "#0747A6", token: "--color-primary-blue-dark" },
  { name: "Blue Light", value: "#DEEBFF", token: "--color-blue-light" },
  { name: "Blue Accent", value: "#99C2FF", token: "--color-blue-accent" },
  { name: "Text Dark", value: "#253858", token: "--color-text-dark" },
  { name: "Text Medium", value: "#505F79", token: "--color-text-medium" },
  { name: "Text Light", value: "#7A869A", token: "--color-text-light" },
  { name: "Success Green", value: "#006644", token: "--color-success-green" },
  { name: "Success Green Light", value: "#E3FCEF", token: "--color-success-green-light" },
  { name: "Background Gray", value: "#F4F5F7", token: "--color-bg-gray" },
  { name: "Border Gray", value: "#EBECF0", token: "--color-border-gray" },
  { name: "White", value: "#FFFFFF", token: "--color-white" },
];

function ColorPalette() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#253858] mb-6">Paleta de Cores</h1>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color) => (
          <div key={color.token} className="flex flex-col gap-2">
            <div
              className="h-20 rounded-lg border border-[#EBECF0]"
              style={{ backgroundColor: color.value }}
            />
            <div>
              <p className="text-sm font-semibold text-[#253858]">{color.name}</p>
              <p className="text-xs text-[#505F79] font-mono">{color.value}</p>
              <p className="text-xs text-[#7A869A] font-mono">{color.token}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta<typeof ColorPalette> = {
  title: "Design System/Cores",
  component: ColorPalette,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Paleta: Story = {};
