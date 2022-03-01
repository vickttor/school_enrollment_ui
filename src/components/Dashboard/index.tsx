import { SDashboard } from "./styles";

import { FcDataConfiguration } from "react-icons/fc/index";
import { BiEdit } from "react-icons/bi/index";
import { getData } from "../../hooks/useFetch";

type APIResponse = {
  name: string;
  birthday: Date;
  email: string;
  phone: string;
  gender: string;
  deficiency?: Boolean;
  deficiency_description?: string;
  created_at: Date;
  cpf: string;
  course_id?: string;
  courses_id?: string;
  id: string;
};

export function Dashboard() {
  const students = getData<APIResponse[]>("students");

  const teachers = getData<APIResponse[]>("teachers");

  return (
    <SDashboard>
      <div className="tableContainer">
        {students.isFetching || teachers.isFetching ? (
          <p>Carregando...</p>
        ) : students.error || teachers.error ? (
          <p>Algum error ocorreu</p>
        ) : students.data && teachers.data ? (
          <table cellSpacing="0">
            <thead>
              {/* table header */}
              <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Curso</th>
                <th>Cargo</th>
                <th>
                  <FcDataConfiguration id="DataConfigIcon" size="3ch" />
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.data?.map((entity) => {
                return (
                  <tr key={entity.id}>
                    <td align="center">{entity.cpf}</td>
                    <td align="center">{entity.name}</td>
                    <td align="center">{entity.courses_id}</td>
                    <td align="center">Professor</td>
                    <td align="center">
                      <BiEdit className="DataEditIcon" size="2ch" />
                    </td>
                  </tr>
                );
              })}
              {students.data?.map((entity) => {
                return (
                  <tr key={entity.id}>
                    <td align="center">{entity.cpf}</td>
                    <td align="center">{entity.name}</td>
                    <td align="center">{entity.course_id}</td>
                    <td align="center">Estudante</td>
                    <td align="center">
                      <BiEdit className="DataEditIcon" size="2ch" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>There is not Data</p>
        )}
      </div>
    </SDashboard>
  );
}
