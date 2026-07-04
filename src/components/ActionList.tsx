"use client";

interface ActionItem {
  label: string;
  onClick?: () => void;
}

interface ActionListProps {
  items: ActionItem[];
}

function ChevronRight() {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="#8993A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ActionList({ items }: ActionListProps) {
  return (
    <div className="mx-4 mt-4 bg-white rounded-2xl border border-[#EBECF0] shadow-sm overflow-hidden">
      {items.map((item, index) => (
        <div key={item.label}>
          <button
            onClick={item.onClick}
            className="w-full flex items-center justify-between px-5 py-[18px] hover:bg-[#F4F5F7] active:bg-[#EBECF0] transition-colors text-left group"
          >
            <span
              className="text-[#253858] text-sm font-semibold leading-snug"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {item.label}
            </span>
            <ChevronRight />
          </button>
          {index < items.length - 1 && (
            <div className="h-px bg-[#EBECF0]" />
          )}
        </div>
      ))}
    </div>
  );
}
