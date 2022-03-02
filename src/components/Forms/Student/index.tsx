// react hooks
import { useState, useEffect, BaseSyntheticEvent } from "react";

// Own hook
import { getData } from "../../../hooks/useFetch";

// Course type
import { CourseDataType } from "../Course/index";

// Post Data
import { insertData } from "../../../hooks/useInsert";

// Next Router
import Router from "next/router";

// Styles
import { SStudentForm } from "./styles";

// Types

import { APIResponse } from "../../Dashboard";

type studentFormProps = {
  studentData?: Array<APIResponse> | null;
  method?: string;
  cpfToUpdate?: string;
};

export function StudentForm({
  studentData,
  method,
  cpfToUpdate,
}: studentFormProps) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [course, setCourse] = useState<string | undefined>("");
  const [gender, setGender] = useState("");
  const [deficiency, setDeficiency] = useState<string | undefined>("");
  const [deficiencyDescription, setDeficiencyDescription] = useState<
    string | undefined
  >("");

  const [result, setResult] = useState(false);

  const courses = getData<CourseDataType[]>("courses");

  useEffect(() => {
    if (courses.data) {
      setCourse(courses.data[0]?.id);
    }

    if (studentData && studentData?.length !== 0) {
      setName(studentData[0].full_name);
      setBirthday(studentData[0].birthday);
      setEmail(studentData[0].email);
      setPhone(studentData[0].phone);
      setCpf(studentData[0].cpf);
      setCourse(studentData[0].course_id);
      setGender(studentData[0].gender);
      setDeficiency(studentData[0].deficiency);
      setDeficiencyDescription(studentData[0].deficiency_description);
    }
  }, [courses.data, studentData]);

  async function makePost(e: BaseSyntheticEvent) {
    e.preventDefault();

    if (cpf.length === 11 && gender.length === 1 && deficiency?.length !== 0) {
      const objectToSend = {
        cpf: cpf,
        birthday: birthday,
        email: email,
        phone: phone,
        full_name: name,
        gender: gender,
        deficiency: deficiency,
        deficiency_description: deficiencyDescription,
        course_id: course,
      };

      if (cpfToUpdate === null || cpfToUpdate === undefined) {
        cpfToUpdate = "";
      }

      const result = await insertData<APIResponse>(
        `students/${cpfToUpdate}`,
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

    alert("Verifique os Dados");
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
    <SStudentForm
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
              placeholder="Nome completo do aluno"
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
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              value={phone}
              placeholder="(xx) xxxxx-xxxx"
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
              required
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
                onChange={(e) => setGender(e.target.value)}
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
                onChange={(e) => setGender(e.target.value)}
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
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "N"}
              />
              <label htmlFor="another">Outro</label>
            </div>
          </div>

          <p>Possuí alguma deficiência?</p>

          <div className="deficiency">
            <div>
              <input
                type="radio"
                id="positive"
                name="deficiency"
                value="positive"
                onChange={(e) => setDeficiency(e.target.value)}
                checked={deficiency === "positive"}
              />
              <label htmlFor="positive">Sim</label>
            </div>

            <div>
              <input
                type="radio"
                id="negative"
                name="deficiency"
                value="negative"
                onChange={(e) => setDeficiency(e.target.value)}
                checked={deficiency === "negative"}
              />
              <label htmlFor="negative">Não</label>
            </div>

            <input
              type="text"
              value={deficiencyDescription}
              onChange={(e) => setDeficiencyDescription(e.target.value)}
              placeholder="Se sim, qual?"
            />
          </div>

          <button type="submit">Cadastrar</button>
        </>
      )}
    </SStudentForm>
  );
}
