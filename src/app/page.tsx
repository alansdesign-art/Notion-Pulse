import { TopBar } from "@/components/TopBar";
import { SectionMessage } from "@/components/SectionMessage";
import { StudentCard } from "@/components/StudentCard";
import { ActionList } from "@/components/ActionList";
import { Button } from "@/components/ui/button";

const student = {
  name: "Erick Francis Matias Oliveira",
  email: "erick.francismo@gmail.com",
  cpf: "123.812.000-00",
  birthdate: "26/03/1987",
  id: "000001",
  registrationDate: "26/03/2022",
  studentSince: "3 anos",
  status: "ATIVO" as const,
};

const actions = [
  { label: "Renovar contrato" },
  { label: "Upgrade de plano" },
  { label: "Downgrade de plano" },
  { label: "Rematrícula de contrato" },
];

export default function ContratoPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] flex flex-col max-w-md mx-auto relative">
      <TopBar title="Contrato 000000" />

      <div className="flex-1 overflow-y-auto pb-28">
        <SectionMessage
          message="Aluno identificado pelo e-mail dos ticket."
          linkText="Acessar resumo do aluno"
        />

        <StudentCard student={student} />

        <ActionList items={actions} />
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pb-6 pt-3 bg-white border-t border-[#EBECF0]">
        <Button className="w-full h-12 bg-[#0052CC] hover:bg-[#0747A6] text-white text-sm font-semibold rounded-xl">
          Criar novo contrato
        </Button>
      </div>
    </div>
  );
}
