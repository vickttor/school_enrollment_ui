// React hooks
import { useState, useEffect, BaseSyntheticEvent } from "react";

// Router
import Router from "next/router";

// Own Hooks
import { insertData } from "../../../hooks/useInsert";
import { getData } from "../../../hooks/useFetch";

// Types type
import { APIResponse } from "../../Dashboard";
import { CourseDataType } from "../Course/index";

type TeacherFormProps = {
  teacherData?: Array<APIResponse> | null;
  method?: string;
  cpfToUpdate?: string;
};

// Styles
import { STeacherForm } from "./styles";

export function TeacherForm({
  teacherData,
  method,
  cpfToUpdate,
}: TeacherFormProps) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [course, setCourse] = useState<string | undefined>("");
  const [gender, setGender] = useState("");

  const [result, setResult] = useState(false);

  const courses = getData<CourseDataType[]>("courses");

  useEffect(() => {
    if (courses.data) {
      setCourse(courses.data[0]?.id);
    }

    if (teacherData && teacherData?.length !== 0) {
      setName(teacherData[0].full_name);
      setBirthday(teacherData[0].birthday);
      setEmail(teacherData[0].email);
      setPhone(teacherData[0].phone);
      setCpf(teacherData[0].cpf);
      setCourse(teacherData[0].course_id);
      setGender(teacherData[0].gender);
    }
  }, [courses.data, teacherData]);

  async function makePost(e: BaseSyntheticEvent) {
    e.preventDefault();

    if (cpf.length === 11 && gender.length === 1) {
      const objectToSend = {
        cpf: cpf,
        birthday: birthday,
        email: email,
        phone: phone,
        full_name: name,
        gender: gender,
        course_id: course,
      };

      if (cpfToUpdate === null || cpfToUpdate === undefined) {
        cpfToUpdate = "";
      }

      const result = await insertData<APIResponse>(
        `teachers/${cpfToUpdate}`,
        objectToSend,
        method
      );

      if (result.data.error) {
        alert(result.data.error);
        return;
      }

      setResult(true);
      return;
    }
    alert("Verifique os Dados inseridos");
  }

  if (result) {
    return (
      <div className="success">
        <h2>Dados inseridos com sucesso</h2>
        <div className="nextStep">
          <button onClick={() => Router.push("/")}>Tela Inicial</button>
          <button onClick={() => setResult(false)}>Ver dados</button>
        </div>
      </div>
    );
  }

  return (
    <STeacherForm
      initial={{ y: 30, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      onSubmit={makePost}
    >
      {courses.isFetching ? (
        <h2>Carregando ... </h2>
      ) : courses.error || courses.data?.length === 0 ? (
        <h2>Não há curso na plataforma! Cadastre algum curso primeiro</h2>
      ) : (
        <>
          <div className="inputsInLine">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo do Professor"
              required
            />
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
          <div className="inputsInLine">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <input
              type="tel"
              value={phone}
              placeholder="(11) 12345-6789"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="inputsInLine">
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF: Apenas os números"
            />

            <select
              name="courses"
              id="courses"
              onChange={(e) => setCourse(e.currentTarget.value)}
            >
              {courses.data?.map((course) => {
                return (
                  <option key={course.id} value={course.id}>
                    {course.title_course}
                  </option>
                );
              })}
            </select>
          </div>

          <p>Genêro</p>

          <div className="gender">
            <div>
              <input
                type="radio"
                id="man"
                name="gender"
                value="M"
                onChange={(e) => setGender(e.currentTarget.value)}
                checked={gender === "M"}
              />
              <label htmlFor="man">Homem</label>
            </div>

            <div>
              <input
                type="radio"
                id="woman"
                name="gender"
                value="F"
                onChange={(e) => setGender(e.currentTarget.value)}
                checked={gender === "F"}
              />
              <label htmlFor="woman">Mulher</label>
            </div>

            <div>
              <input
                type="radio"
                id="another"
                name="gender"
                value="N"
                onChange={(e) => setGender(e.currentTarget.value)}
                checked={gender === "N"}
              />
              <label htmlFor="another">Outro</label>
            </div>
          </div>

          <button type="submit">Cadastrar</button>
        </>
      )}
    </STeacherForm>
  );
}
