import { SStudentForm } from "./styles";

export function StudentForm() {
  return (
    <SStudentForm method="POST" action="http://localhost:333/students">
      <div className="inputsInLine">
        <input type="text" placeholder="Nome completo do aluno" required />
        <input type="date" required />
      </div>
      <div className="inputsInLine">
        <input type="email" placeholder="E-mail" required />
        <input
          type="tel"
          placeholder="(11) 12345-6789"
          pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}"
          required
        />
      </div>

      <div className="inputsInLine">
        <input type="text" placeholder="CPF: Apenas os números" />

        <select name="courses" id="courses">
          <option value="id_do_curso">Desenvolvimento de Sistemas</option>
          <option value="id_do_curso">Marketing Digital</option>
          <option value="id_do_curso">Administração</option>
        </select>
      </div>

      <p>Genêro</p>

      <div className="gender">
        <div>
          <input
            type="radio"
            id="man"
            name="gender"
            value="Homem"
            onChange={() => {}}
            checked
          />
          <label htmlFor="man">Homem</label>
        </div>

        <div>
          <input
            type="radio"
            id="woman"
            name="gender"
            value="Mulher"
            onChange={() => {}}
          />
          <label htmlFor="woman">Mulher</label>
        </div>

        <div>
          <input
            type="radio"
            id="another"
            name="gender"
            value="Outro"
            onChange={() => {}}
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
            value="Homem"
            onChange={() => {}}
          />
          <label htmlFor="positive">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="negative"
            name="deficiency"
            value="Mulher"
            onChange={() => {}}
            checked
          />
          <label htmlFor="negative">Não</label>
        </div>

        <input type="text" placeholder="Se sim, qual?" />
      </div>

      <button type="submit">Cadastrar</button>
    </SStudentForm>
  );
}
