// React hooks
import { useState, BaseSyntheticEvent } from "react";

// Next router
import Router from "next/router";

// Own hooks
import { insertData } from "../../../hooks/useInsert";

// Styles
import { SCourseForm } from "./styles";

// Type
export type CourseDataType = {
  id?: string;
  title_course: string;
  description: string;
  time_course: string;
};

export function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeCourse, setTimeCourse] = useState("Manhã");

  const [result, setResult] = useState(false);

  async function makePost(e: BaseSyntheticEvent) {
    e.preventDefault();

    const objectToSend = {
      title_course: title,
      description: description,
      time_course: timeCourse,
    };

    const result = await insertData<CourseDataType>("courses", objectToSend);

    if (result.data.error) {
      alert(result.data.error);
      return;
    }

    setResult(true);
  }

  if (result) {
    return (
      <div className="success">
        <h2>O Curso foi criado com sucesso</h2>
        <div className="nextStep">
          <button onClick={() => Router.push("/")}>Tela Inicial</button>
          <button onClick={() => setResult(false)}>+ Cursos</button>
        </div>
      </div>
    );
  }

  return (
    <SCourseForm
      initial={{ y: 30, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      onSubmit={makePost}
    >
      <input
        type="text"
        placeholder="Título do curso"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        name="description"
        id="description"
        rows={10}
        placeholder="Descrição do curso (Opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <p>Período </p>
      <select
        name="courses"
        id="courses"
        onChange={(e) => {
          setTimeCourse(e.currentTarget.value);
        }}
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <button type="submit">Cadastrar</button>
    </SCourseForm>
  );
}
