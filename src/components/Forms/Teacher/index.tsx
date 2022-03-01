import { STeacherForm } from "./styles";

export function TeacherForm() {
  return (
    <STeacherForm method="POST" action="http://localhost:333/teachers">
      <div className="inputsInLine">
        <input type="text" placeholder="Nome completo do Professor" required />
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

      <button type="submit">Cadastrar</button>
    </STeacherForm>
  );
}
