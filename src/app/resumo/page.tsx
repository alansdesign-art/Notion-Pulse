"use client";

import { useState } from "react";

// ── Ícones inline ──────────────────────────────────────────────────────────

function IconBack() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L5 8L10 13" stroke="#0067FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H17M1 7H17M1 13H17" stroke="#253858" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3.5h12c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1z" stroke="#505F79" strokeWidth="1.2"/>
      <path d="M1 4.5l7 4.5 7-4.5" stroke="#505F79" strokeWidth="1.2"/>
    </svg>
  );
}

function IconIdCard() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#505F79" strokeWidth="1.2"/>
      <circle cx="5.5" cy="8" r="1.5" stroke="#505F79" strokeWidth="1.2"/>
      <path d="M9 6.5h3M9 9.5h3" stroke="#505F79" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconBirthday() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="7" width="14" height="8" rx="1" stroke="#505F79" strokeWidth="1.2"/>
      <path d="M4 7V5.5M8 7V5.5M12 7V5.5" stroke="#505F79" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 5.5C4 4.5 5 3.5 4 2M8 5.5C8 4.5 9 3.5 8 2M12 5.5C12 4.5 13 3.5 12 2" stroke="#505F79" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconEdit() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2.5a1.414 1.414 0 0 1 2 2L5 13H3v-2L11.5 2.5z" stroke="#0067FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="#0067FF" strokeWidth="1.2"/>
      <circle cx="8" cy="8" r="2" stroke="#0067FF" strokeWidth="1.2"/>
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l6 6-6 6" stroke="#8993A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconInvestment() {
  return (
    <svg width="32" height="32" viewBox="42 514 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M61.625 514.5H66.875C67.4844 514.5 68 515.016 68 515.625V520.875C68 521.531 67.4844 522 66.875 522C66.2188 522 65.75 521.531 65.75 520.875V518.297L58.2031 524.766C57.7812 525.094 57.1719 525.094 56.75 524.766L51.4062 520.078L44.2344 524.812C43.7188 525.188 43.0156 525.047 42.6875 524.531C42.3125 524.016 42.4531 523.312 42.9688 522.938L50.8438 517.688C51.2656 517.406 51.8281 517.453 52.2031 517.781L57.5 522.422L64.0625 516.75H61.625C60.9688 516.75 60.5 516.281 60.5 515.625C60.5 515.016 60.9688 514.5 61.625 514.5ZM51.875 534.75V527.25C51.875 527.062 51.6875 526.875 51.5 526.875C51.2656 526.875 51.125 527.062 51.125 527.25V534.75C51.125 534.984 51.2656 535.125 51.5 535.125C51.6875 535.125 51.875 534.984 51.875 534.75ZM51.5 525C52.7188 525 53.75 526.031 53.75 527.25V534.75C53.75 536.016 52.7188 537 51.5 537C50.2344 537 49.25 536.016 49.25 534.75V527.25C49.25 526.031 50.2344 525 51.5 525ZM45.875 534.75V531.75C45.875 531.562 45.6875 531.375 45.5 531.375C45.2656 531.375 45.125 531.562 45.125 531.75V534.75C45.125 534.984 45.2656 535.125 45.5 535.125C45.6875 535.125 45.875 534.984 45.875 534.75ZM45.5 529.5C46.7188 529.5 47.75 530.531 47.75 531.75V534.75C47.75 536.016 46.7188 537 45.5 537C44.2344 537 43.25 536.016 43.25 534.75V531.75C43.25 530.531 44.2344 529.5 45.5 529.5ZM62.75 538.5C60.3125 538.5 58.1094 537.234 56.8906 535.125C55.6719 533.062 55.6719 530.484 56.8906 528.375C58.1094 526.312 60.3125 525 62.75 525C65.1406 525 67.3438 526.312 68.5625 528.375C69.7812 530.484 69.7812 533.062 68.5625 535.125C67.3438 537.234 65.1406 538.5 62.75 538.5ZM61.625 530.391V530.438C61.5781 530.344 61.625 530.297 61.625 530.25C61.6719 530.203 61.7188 530.156 61.8594 530.109C62.0938 529.969 62.4219 529.875 62.7031 529.922C63.0781 529.922 63.5 529.969 63.9688 530.109C64.3438 530.203 64.7656 529.969 64.8594 529.547C64.9531 529.125 64.7188 528.75 64.2969 528.656C64.0625 528.562 63.7812 528.516 63.4531 528.469V528C63.4531 527.625 63.125 527.25 62.7031 527.25C62.3281 527.25 61.9531 527.625 61.9531 528V528.469C61.6719 528.516 61.3906 528.609 61.1094 528.75C60.5938 529.078 60.0312 529.641 60.125 530.531C60.1719 531.281 60.6406 531.703 61.1094 531.938C61.5312 532.172 62.0469 532.312 62.4688 532.453H62.5625C63.0312 532.594 63.4062 532.688 63.6406 532.828C63.8281 532.969 63.875 533.062 63.875 533.109C63.875 533.203 63.8281 533.297 63.8281 533.344C63.7812 533.344 63.7344 533.438 63.6406 533.484C63.4062 533.578 63.0781 533.672 62.75 533.625C62.3281 533.625 61.9062 533.484 61.3438 533.344C61.25 533.297 61.1562 533.25 61.0625 533.25C60.6875 533.109 60.2656 533.344 60.125 533.719C60.0312 534.141 60.2188 534.562 60.6406 534.656C60.6875 534.703 60.7812 534.703 60.875 534.75C61.2031 534.844 61.5781 534.984 62 535.078V535.594C62 536.016 62.3281 536.344 62.75 536.344C63.125 536.344 63.5 536.016 63.5 535.594V535.078C63.7812 535.031 64.0625 534.938 64.3438 534.797C64.9062 534.469 65.375 533.906 65.375 533.062C65.3281 532.312 64.8594 531.844 64.3906 531.562C63.9688 531.281 63.4062 531.141 62.9844 531H62.9375C62.4688 530.859 62.0938 530.766 61.8125 530.625C61.625 530.484 61.625 530.438 61.625 530.438V530.391Z" fill="#66A4FF"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="32" height="32" viewBox="43 621 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.9531 621.5C56.4219 621.5 56.7969 621.781 56.9844 622.156L60.2188 628.766L67.3906 629.844C67.8125 629.891 68.1406 630.172 68.2812 630.594C68.4219 631.016 68.3281 631.438 68 631.766L62.7969 636.922L64.0156 644.188C64.1094 644.609 63.9219 645.078 63.5938 645.312C63.2188 645.547 62.75 645.594 62.375 645.406L55.9531 641.938L49.5781 645.406C49.1562 645.594 48.7344 645.547 48.3594 645.312C48.0312 645.031 47.8438 644.609 47.9375 644.188L49.1562 636.922L43.9531 631.766C43.625 631.438 43.5312 631.016 43.6719 630.594C43.8125 630.219 44.1406 629.891 44.5625 629.844L51.7344 628.766L54.9688 622.156C55.1562 621.781 55.5312 621.5 55.9531 621.5ZM55.9531 625.203L53.5156 630.312C53.3281 630.641 53.0469 630.875 52.6719 630.922L47.1406 631.719L51.125 635.703C51.4062 635.984 51.5469 636.359 51.4531 636.688L50.5156 642.312L55.4375 639.688C55.7656 639.5 56.1875 639.5 56.5156 639.688L61.4375 642.312L60.5 636.734C60.4062 636.359 60.5469 635.984 60.8281 635.75L64.8125 631.719L59.2812 630.922C58.9062 630.875 58.625 630.641 58.4375 630.312L55.9531 625.203Z" fill="#66A4FF"/>
    </svg>
  );
}

function IconCoin() {
  return (
    <svg width="32" height="32" viewBox="44 727 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M65.75 740.5C65.75 737.031 63.875 733.844 60.875 732.062C57.8281 730.328 54.125 730.328 51.125 732.062C48.0781 733.844 46.25 737.031 46.25 740.5C46.25 744.016 48.0781 747.203 51.125 748.984C54.125 750.719 57.8281 750.719 60.875 748.984C63.875 747.203 65.75 744.016 65.75 740.5ZM44 740.5C44 736.234 46.25 732.297 50 730.141C53.7031 727.984 58.25 727.984 62 730.141C65.7031 732.297 68 736.234 68 740.5C68 744.812 65.7031 748.75 62 750.906C58.25 753.062 53.7031 753.062 50 750.906C46.25 748.75 44 744.812 44 740.5ZM56.9375 734.781V735.438C57.4062 735.484 57.875 735.625 58.2969 735.766C58.3906 735.766 58.4844 735.812 58.5781 735.812C59.0938 736 59.4219 736.562 59.2812 737.078C59.1406 737.641 58.5781 737.922 58.0156 737.781C57.9688 737.781 57.875 737.734 57.8281 737.734C57.5 737.641 57.1719 737.547 56.8438 737.5C56.1875 737.359 55.4844 737.406 54.9219 737.688C54.4062 737.875 53.9844 738.438 54.5469 738.812C55.0156 739.094 55.5781 739.234 56.0938 739.422C56.2344 739.422 56.3281 739.469 56.4219 739.469C57.1719 739.703 58.1094 739.984 58.8125 740.453C59.7031 741.062 60.125 742.094 59.9375 743.172C59.75 744.203 59 744.906 58.1562 745.281C57.7812 745.422 57.3594 745.516 56.9375 745.562V746.266C56.9375 746.828 56.5156 747.297 55.9531 747.297C55.3906 747.297 54.9219 746.828 54.9219 746.266V745.469C54.2656 745.281 53.6094 745.094 52.9062 744.859C52.3906 744.672 52.1094 744.109 52.2969 743.594C52.4844 743.031 53.0469 742.75 53.5625 742.938C53.7031 742.984 53.7969 743.031 53.9375 743.078C54.4531 743.219 54.9688 743.406 55.5312 743.5C56.3281 743.641 56.9844 743.547 57.4062 743.406C57.9688 743.172 58.2031 742.469 57.6406 742.094C57.1719 741.812 56.6094 741.625 56.0469 741.484C55.9531 741.438 55.8125 741.438 55.7188 741.391C55.0156 741.203 54.125 740.922 53.4688 740.5C52.5312 739.938 52.1094 738.953 52.2969 737.875C52.4844 736.844 53.2812 736.188 54.125 735.812C54.3594 735.672 54.6406 735.625 54.9219 735.531V734.781C54.9219 734.219 55.3906 733.75 55.9531 733.75C56.5156 733.75 56.9375 734.219 56.9375 734.781Z" fill="#66A4FF"/>
    </svg>
  );
}

// ── Componentes ────────────────────────────────────────────────────────────

const fm = { fontFamily: "var(--font-margem)" } as React.CSSProperties;

type Tab = "Pessoais" | "Endereço" | "Contato";

function StudentInfoCard() {
  const [activeTab, setActiveTab] = useState<Tab>("Pessoais");
  const tabs: Tab[] = ["Pessoais", "Endereço", "Contato"];

  return (
    <div className="bg-white border border-[#EBECF0] rounded-xl p-6 flex flex-col gap-5">
      {/* Avatar + nome + status */}
      <div className="flex gap-2 items-start">
        <div className="relative shrink-0 size-12">
          <img
            src="/icons/avatar.svg"
            alt="Avatar do aluno"
            width={48}
            height={48}
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* Tag ATIVO */}
          <span
            className="self-start text-[#076E4F] text-[11px] font-medium uppercase px-2 py-1 rounded-[4px_8px_8px_4px] bg-[#E6F8F2] leading-none"
            style={fm}
          >
            Ativo
          </span>

          {/* Nome */}
          <p className="text-[#172B4D] text-[20px] leading-[1.25]" style={fm}>
            Erick Francis Matias Oliveira
          </p>

          {/* Email mascarado */}
          <div className="flex items-center gap-1 text-[#505F79] text-xs">
            <IconEnvelope />
            <span style={fm}>•••••••••••••••••••••••••••</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-8 rounded-full text-[14px] leading-[1.25] transition-colors ${
              activeTab === tab
                ? "bg-[#CCE1FF] text-[#005DE6]"
                : "bg-white border border-[#97A0AF] text-[#172B4D]"
            }`}
            style={fm}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Info pessoais (tab Pessoais) */}
      {activeTab === "Pessoais" && (
        <div className="flex items-start gap-5">
          <div className="flex flex-col gap-2 flex-1 text-[#505F79] text-xs">
            <div className="flex items-center gap-1">
              <IconIdCard />
              <span style={fm}>•••••••••••••••</span>
            </div>
            <div className="flex items-center gap-1">
              <IconBirthday />
              <span style={fm}>•••••••••</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="size-10 bg-[#F2F7FF] rounded-lg flex items-center justify-center">
              <IconEdit />
            </button>
            <button className="size-10 bg-[#F2F7FF] rounded-lg flex items-center justify-center">
              <IconEye />
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-[#EBECF0] -mx-6" />

      {/* ID / Cadastro / Aluno há */}
      <div className="flex gap-5">
        {[
          { label: "ID", value: "000001" },
          { label: "Cadastro", value: "26/03/2022" },
          { label: "Aluno há", value: "3 anos" },
        ].map(({ label, value }) => (
          <div key={label} className="flex-1 flex flex-col gap-0.5">
            <span className="text-[#505F79] text-[12px] leading-[1.25]" style={fm}>{label}</span>
            <span className="text-[#172B4D] text-[14px] font-medium leading-[1.25]" style={fm}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContratosCard() {
  return (
    <button className="w-full bg-white border border-[#EBECF0] rounded-xl p-6 flex items-center gap-5 hover:bg-[#F4F5F7] transition-colors text-left">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-[#172B4D] text-[16px] font-medium leading-[1.25]" style={fm}>
          Contratos
        </span>
        <span className="bg-[#0067FF] text-white text-[11px] leading-none font-medium rounded-full size-4 flex items-center justify-center" style={fm}>
          2
        </span>
      </div>
      <IconChevronRight />
    </button>
  );
}

function InfoCard({
  icon,
  label,
  value,
  valueColor = "#66A4FF",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="bg-white border border-[#EBECF0] rounded-xl p-6 flex items-center gap-2">
      <div className="shrink-0">{icon}</div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[#505F79] text-[12px] leading-[1.25]" style={fm}>{label}</span>
        <span className="text-[16px] font-medium leading-[1.25]" style={{ ...fm, color: valueColor }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function SplitInfoCard({
  icon,
  left,
  right,
}: {
  icon: React.ReactNode;
  left: { label: string; value: string };
  right: { label: string; value: string };
}) {
  return (
    <div className="bg-white border border-[#EBECF0] rounded-xl p-6 flex items-center gap-2">
      <div className="shrink-0">{icon}</div>
      <div className="flex flex-1 items-center gap-4 min-w-0">
        <div className="flex-1 flex flex-col gap-0.5">
          <span className="text-[#505F79] text-[12px] leading-[1.25]" style={fm}>{left.label}</span>
          <span className="text-[#66A4FF] text-[16px] font-medium leading-[1.25]" style={fm}>{left.value}</span>
        </div>
        <div className="w-px h-8 bg-[#EBECF0] shrink-0" />
        <div className="flex-1 flex flex-col gap-0.5">
          <span className="text-[#505F79] text-[12px] leading-[1.25]" style={fm}>{right.label}</span>
          <span className="text-[#66A4FF] text-[16px] font-medium leading-[1.25]" style={fm}>{right.value}</span>
        </div>
      </div>
    </div>
  );
}

// ── Página ─────────────────────────────────────────────────────────────────

export default function ResumoAlunoPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] flex flex-col max-w-[460px] mx-auto relative">
      {/* Header */}
      <div className="bg-white border-b border-[#EBECF0] px-4 py-3 flex items-center gap-3">
        <button className="size-10 border border-[#0067FF] rounded-lg flex items-center justify-center shrink-0">
          <IconBack />
        </button>
        <span
          className="flex-1 text-center text-[#172B4D] text-[16px] font-medium leading-[1.25]"
          style={fm}
        >
          Resumo do aluno
        </span>
        <button className="size-10 bg-[#F9F9F9] shadow-sm rounded-md flex items-center justify-center shrink-0">
          <IconMenu />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto px-4 py-[18px] pb-28 flex flex-col gap-6">
        <StudentInfoCard />
        <ContratosCard />
        <InfoCard
          icon={<IconInvestment />}
          label="Total investido"
          value="R$ 2.311,90"
        />
        <SplitInfoCard
          icon={<IconStar />}
          left={{ label: "NPS Superior", value: "10" }}
          right={{ label: "NPS Preparatório", value: "8" }}
        />
        <SplitInfoCard
          icon={<IconCoin />}
          left={{ label: "Créditos Superior", value: "R$ 200,50" }}
          right={{ label: "Créditos Preparatório", value: "R$ 0,00" }}
        />
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[460px] px-4 py-2 bg-white border-t border-[#EBECF0]">
        <button
          className="w-full h-10 bg-[#0067FF] hover:bg-[#0052CC] text-white text-[14px] rounded-lg transition-colors"
          style={fm}
        >
          Cadastrar novo aluno
        </button>
      </div>
    </div>
  );
}
