import { SCourseForm } from "./styles";

export function CourseForm() {
  return (
    <SCourseForm method="POST" action="http://localhost:333/courses">
      <input type="text" placeholder="Título do curso" required />

      <textarea
        name="description"
        id="description"
        rows={10}
        placeholder="Descrição do curso (Opcional)"
      />

      <p>Período </p>
      <select name="courses" id="courses">
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <button type="submit">Cadastrar</button>
    </SCourseForm>
  );
}
