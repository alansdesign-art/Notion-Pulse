"use client";

import { useState } from "react";
import Image from "next/image";

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
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24l7-7 4 4 7-8 6 6" stroke="#66A4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="26" cy="26" r="5" fill="#66A4FF" opacity="0.2"/>
      <path d="M26 24v2M25 26h2" stroke="#66A4FF" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z" stroke="#66A4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCoin() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="11" stroke="#66A4FF" strokeWidth="1.5"/>
      <path d="M16 10v2M16 20v2M13 14c0-1.1.9-2 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 2-2" stroke="#66A4FF" strokeWidth="1.2" strokeLinecap="round"/>
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
          <Image
            src="/icons/avatar-aluno.png"
            alt="Avatar do aluno"
            fill
            className="rounded-full object-cover"
            unoptimized
          />
          <div className="absolute bottom-0 right-0 bg-[#0067FF] rounded-full size-3 flex items-center justify-center">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
              <path d="M4.5 1L2 3.5l-1-1" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
    <div className="min-h-screen bg-[#FAFBFC] flex flex-col max-w-md mx-auto relative">
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
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pb-6 pt-3 bg-white border-t border-[#EBECF0]">
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
