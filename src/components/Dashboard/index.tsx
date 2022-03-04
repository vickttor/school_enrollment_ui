import { SDashboard } from "./styles";

import { BiEdit } from "react-icons/bi/index";

import NavLink from "next/link";

import { formatCPF } from "../../utils/formatCpf";

import { motion } from "framer-motion";

export type APIResponse = {
  full_name: string;
  birthday: string;
  email: string;
  phone: string;
  gender: string;
  deficiency?: string;
  deficiency_description?: string;
  created_at?: Date;
  cpf: string;
  course_id?: string;
  title_course?: string;
  id?: string;
};

type DashboardProps = {
  students: APIResponse[];
  teachers: APIResponse[];
};

export function Dashboard(props: DashboardProps) {
  const students = props.students;
  const teachers = props.teachers;

  return (
    <SDashboard>
      <motion.div
        className="tableContainer"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 2,
        }}
      >
        <table cellSpacing="0">
          <thead>
            {/* table header */}
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {teachers &&
              teachers?.map((entity) => {
                return (
                  <tr key={entity.id}>
                    <td>{formatCPF(entity.cpf)}</td>
                    <td>{entity.full_name}</td>
                    <td>{entity.title_course}</td>
                    <td>Professor</td>
                    <td align="center">
                      <NavLink
                        href={`/edit/teachers?cpf=${entity.cpf}`}
                        passHref
                      >
                        <BiEdit className="DataEditIcon" size="24" />
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            {students &&
              students?.map((entity) => {
                return (
                  <tr key={entity.id}>
                    <td>{formatCPF(entity.cpf)}</td>
                    <td>{entity.full_name}</td>
                    <td>{entity.title_course}</td>
                    <td>Estudante</td>
                    <td align="center">
                      <NavLink
                        href={`/edit/students?cpf=${entity.cpf}`}
                        passHref
                      >
                        <BiEdit className="DataEditIcon" size="24" />
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </motion.div>
    </SDashboard>
  );
}
