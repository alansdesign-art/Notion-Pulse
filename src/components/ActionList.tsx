"use client";

import { IconChevronRight } from "@/components/icons";

interface ActionItem {
  label: string;
  onClick?: () => void;
}

interface ActionListProps {
  items: ActionItem[];
}

export function ActionList({ items }: ActionListProps) {
  return (
    <div className="mx-4 mt-4 bg-white rounded-xl border border-[#EBECF0] shadow-sm overflow-hidden">
      {items.map((item, index) => (
        <div key={item.label}>
          <button
            onClick={item.onClick}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-[#F4F5F7] transition-colors text-left"
          >
            <span className="text-[#253858] text-sm font-medium">{item.label}</span>
            <IconChevronRight />
          </button>
          {index < items.length - 1 && (
            <div className="h-px bg-[#EBECF0] mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}
