"use client";

import { IconSWink } from "@/components/icons";

interface SectionMessageProps {
  message: string;
  linkText: string;
  onLinkClick?: () => void;
}

export function SectionMessage({ message, linkText, onLinkClick }: SectionMessageProps) {
  return (
    <div className="flex items-start gap-3 bg-[#DEEBFF] rounded-lg px-4 py-3 mx-4 mt-4">
      <IconSWink className="shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <p className="text-[#253858] text-sm font-medium leading-snug">{message}</p>
        <button
          onClick={onLinkClick}
          className="text-[#0052CC] text-sm font-medium text-left underline-offset-2 hover:underline"
        >
          {linkText}
        </button>
      </div>
    </div>
  );
}
