import { SFilter } from "./styles";

import Image from "next/image";

export function Filter() {
  return (
    <SFilter>
      <div className="filterCard">
        <Image src="assets/filter.png" alt="Filter" />

        <input type="search" placeholder="CPF do Estudante/Professor " />

        <hr />

        <select name="filter" id="filter">
          <option value="estudantes">Estudantes</option>
          <option value="professores">Professores</option>
        </select>

        <select name="courses" id="courses">
          <option value="id_do_curso">Desenvolvimento de Sistemas</option>
          <option value="id_do_curso">Marketing Digital</option>
          <option value="id_do_curso">Administração</option>
        </select>

        <div className="buttonsField">
          <button type="button" onClick={() => {}}>
            Cancelar
          </button>
          <button type="button" onClick={() => {}}>
            Filtrar
          </button>
        </div>
      </div>
    </SFilter>
  );
}
