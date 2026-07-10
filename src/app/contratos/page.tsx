"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const fm = { fontFamily: "var(--font-margem)" } as React.CSSProperties;

// ── Ícones ──────────────────────────────────────────────────────────────────

function IconBack() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L5 8L10 13" stroke="#0067FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconFilter() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h12M4 8h8M6 12h4" stroke="#0067FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke="#505F79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6 6L1 11" stroke="#8993A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Tag de status ────────────────────────────────────────────────────────────

type TagVariant = "ag-pagamento" | "nao-fidelizado" | "ativo" | "fidelizado" | "inativo" | "encerrado";

const tagStyles: Record<TagVariant, { bg: string; text: string; label: string }> = {
  "ag-pagamento":   { bg: "#FFF6E5", text: "#996700", label: "AG. PAGAMENTO" },
  "nao-fidelizado": { bg: "#EBECF0", text: "#172B4D", label: "NÃO FIDELIZADO" },
  "ativo":          { bg: "#E6F8F2", text: "#076E4F", label: "ATIVO" },
  "fidelizado":     { bg: "#EBECF0", text: "#172B4D", label: "FIDELIZADO" },
  "inativo":        { bg: "#FFEBE6", text: "#BF2600", label: "INATIVO" },
  "encerrado":      { bg: "#EBECF0", text: "#172B4D", label: "ENCERRADO" },
};

function Tag({ variant }: { variant: TagVariant }) {
  const s = tagStyles[variant];
  return (
    <span
      className="text-[11px] leading-none font-medium px-2 py-1 whitespace-nowrap"
      style={{
        ...fm,
        backgroundColor: s.bg,
        color: s.text,
        borderRadius: "8px 4px 8px 4px",
      }}
    >
      {s.label}
    </span>
  );
}

// ── Card de contrato ─────────────────────────────────────────────────────────

interface Contrato {
  id: string;
  tags: TagVariant[];
  tipo: string;
  nome: string;
  valor: string;
  numero: string;
  inicio: string;
  termino: string;
}

function ContratoCard({ contrato }: { contrato: Contrato }) {
  return (
    <div className="bg-white border border-[#EBECF0] rounded-xl p-6 flex gap-5 items-center w-full">
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {contrato.tags.map((t) => <Tag key={t} variant={t} />)}
        </div>

        {/* Tipo + Nome */}
        <div className="flex flex-col" style={fm}>
          <span className="text-[14px] font-medium leading-[1.25] text-[#172B4D]">{contrato.tipo}</span>
          <span className="text-[16px] font-medium leading-[1.25] text-[#172B4D] truncate">{contrato.nome}</span>
        </div>

        {/* Metadados */}
        <div className="flex justify-between text-[12px] text-[#505F79]" style={fm}>
          <div className="flex flex-col gap-0.5">
            <span><strong className="font-bold">Valor:</strong> {contrato.valor}</span>
            <span><strong className="font-bold">N.º contrato:</strong> {contrato.numero}</span>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <span><strong className="font-bold">Início:</strong> {contrato.inicio}</span>
            <span><strong className="font-bold">Término:</strong> {contrato.termino}</span>
          </div>
        </div>
      </div>

      {/* Seta */}
      <button className="shrink-0 size-10 flex items-center justify-center rounded-lg">
        <IconChevronRight />
      </button>
    </div>
  );
}

// ── Dados estáticos ──────────────────────────────────────────────────────────

const contratos: Contrato[] = [
  {
    id: "1",
    tags: ["ag-pagamento", "nao-fidelizado"],
    tipo: "Graduação",
    nome: "Análise e Desenvolvimento de Sistemas",
    valor: "R$ 599,31",
    numero: "000000",
    inicio: "00/00/00",
    termino: "00/00/00",
  },
  {
    id: "2",
    tags: ["ativo", "fidelizado"],
    tipo: "Assinatura",
    nome: "Pro",
    valor: "R$ 299,90",
    numero: "000000",
    inicio: "00/00/00",
    termino: "00/00/00",
  },
];

type Ordenacao = "mais-recentes" | "inicio" | "termino";

const ordenacaoLabels: Record<Ordenacao, string> = {
  "mais-recentes": "Mais recentes",
  "inicio":        "Início",
  "termino":       "Término",
};

// ── Página ───────────────────────────────────────────────────────────────────

export default function ContratosPage() {
  const router = useRouter();
  const [ordenacao, setOrdenacao] = useState<Ordenacao>("mais-recentes");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFBFC] flex flex-col max-w-[460px] mx-auto relative">

      {/* Header */}
      <div className="bg-white border-b border-[#EBECF0] px-4 py-2 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="size-10 border border-[#0067FF] rounded-lg flex items-center justify-center shrink-0"
        >
          <IconBack />
        </button>
        <span className="flex-1 text-center text-[#172B4D] text-[16px] font-medium leading-[1.25]" style={fm}>
          Contratos
        </span>
        {/* placeholder para simetria */}
        <div className="size-10 opacity-0" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 px-4 py-[18px] flex flex-col gap-2">

        {/* Card filtros */}
        <div className="bg-white border border-[#EBECF0] rounded-xl p-6 flex flex-col gap-4">
          {/* Linha 1 — filtros selecionados */}
          <div className="flex items-center gap-5">
            <div className="flex-1 flex items-center gap-1 min-w-0" style={fm}>
              <span className="text-[16px] font-medium leading-[1.25] text-[#172B4D] whitespace-nowrap">Filtros selecionados:</span>
              <span className="text-[14px] leading-[1.25] text-[#172B4D]">nenhum</span>
            </div>
            <button className="shrink-0 size-10 border border-[#0067FF] rounded-lg flex items-center justify-center">
              <IconFilter />
            </button>
          </div>

          {/* Linha 2 — total + ordenação */}
          <div className="flex items-center gap-5">
            <div className="flex-1 flex items-center gap-1 min-w-0" style={fm}>
              <span className="text-[16px] font-medium leading-[1.25] text-[#172B4D]">{contratos.length}</span>
              <span className="text-[14px] leading-[1.25] text-[#172B4D]">contratos encontrados</span>
            </div>

            {/* Select de ordenação */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 h-10 px-3 border border-[#97A0AF] rounded-lg bg-white"
                style={fm}
              >
                <span className="text-[14px] text-[#505F79] leading-[1.25] whitespace-nowrap">
                  {ordenacaoLabels[ordenacao]}
                </span>
                <span className="size-6 bg-[#EBECF0] rounded-[6px] flex items-center justify-center">
                  <IconChevronDown />
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-[#EBECF0] rounded-lg shadow-md z-10 min-w-[148px]">
                  {(Object.keys(ordenacaoLabels) as Ordenacao[]).map((key) => (
                    <button
                      key={key}
                      className={`w-full text-left px-3 py-2 text-[14px] leading-[1.25] hover:bg-[#F4F5F7] first:rounded-t-lg last:rounded-b-lg ${
                        ordenacao === key ? "text-[#0067FF] font-medium" : "text-[#172B4D]"
                      }`}
                      style={fm}
                      onClick={() => { setOrdenacao(key); setDropdownOpen(false); }}
                    >
                      {ordenacaoLabels[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lista de contratos */}
        <div className="flex flex-col gap-2">
          {contratos.map((c) => (
            <ContratoCard key={c.id} contrato={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
