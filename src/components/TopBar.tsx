"use client";

import { IconArrowLeft, IconMenu } from "@/components/icons";

interface TopBarProps {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
}

export function TopBar({ title, onBack, onMenu }: TopBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-[#EBECF0]">
      <button
        onClick={onBack}
        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors"
        aria-label="Voltar"
      >
        <IconArrowLeft />
      </button>
      <span className="text-[#253858] text-base font-semibold">{title}</span>
      <button
        onClick={onMenu}
        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F4F5F7] transition-colors"
        aria-label="Menu"
      >
        <IconMenu />
      </button>
    </div>
  );
}
