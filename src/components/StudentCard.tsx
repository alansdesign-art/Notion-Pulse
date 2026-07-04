"use client";

import { IconAvatar, IconEmail, IconIdCard, IconBirthdayCake, IconEditButton } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

interface StudentData {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  id: string;
  registrationDate: string;
  studentSince: string;
  status: "ATIVO" | "INATIVO";
}

interface StudentCardProps {
  student: StudentData;
  onEdit?: () => void;
}

export function StudentCard({ student, onEdit }: StudentCardProps) {
  return (
    <div className="mx-4 mt-4 bg-white rounded-xl border border-[#EBECF0] shadow-sm overflow-hidden">
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <IconAvatar />
            <div className="flex flex-col gap-0.5">
              <Badge className="w-fit bg-[#E3FCEF] text-[#006644] hover:bg-[#E3FCEF] text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wide border-0 mb-1">
                {student.status}
              </Badge>
              <span className="text-[#253858] text-base font-semibold leading-tight">
                {student.name}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <IconEmail />
                <span className="text-[#505F79] text-xs">{student.email}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onEdit}
            className="shrink-0 mt-1"
            aria-label="Editar aluno"
          >
            <IconEditButton />
          </button>
        </div>

        <div className="mt-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <IconIdCard />
            <span className="text-[#505F79] text-xs">{student.cpf}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconBirthdayCake />
            <span className="text-[#505F79] text-xs">{student.birthdate}</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#EBECF0] mx-4" />

      <div className="px-4 py-3 grid grid-cols-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#7A869A] text-[10px] font-medium uppercase tracking-wide">ID</span>
          <span className="text-[#253858] text-sm font-semibold">{student.id}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[#7A869A] text-[10px] font-medium uppercase tracking-wide">Cadastro</span>
          <span className="text-[#253858] text-sm font-semibold">{student.registrationDate}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[#7A869A] text-[10px] font-medium uppercase tracking-wide">Aluno há</span>
          <span className="text-[#253858] text-sm font-semibold">{student.studentSince}</span>
        </div>
      </div>
    </div>
  );
}
