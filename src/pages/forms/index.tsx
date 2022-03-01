/* eslint-disable @next/next/no-img-element */
// React
import * as React from "react";

// Utils
import { toogleColorButtons } from "../../utils/toggleColorButtons";

// Form Components
import { StudentForm } from "../../components/Forms/Student";
import { TeacherForm } from "../../components/Forms/Teacher";
import { CourseForm } from "../../components/Forms/Course";

// Styles
import SFormsPage from "./styles";
import Link from "next/link";

import { IoClose } from "react-icons/io5/index";

export default function FormsPage() {
  // The first form to be show is CourseForm. The forms changes by clicking on buttons
  const [informationsForm, setInformationsForm] = React.useState({
    form: <CourseForm />,
    img: <img src="assets/course.png" alt="forms draw" />,
    description: (
      <h1>
        A opção <span>Curso</span> faz a criação de um novo curso. Apenas o
        campo de descrição não é obrigatório.
      </h1>
    ),
  });

  return (
    <SFormsPage>
      <div className="closeLink">
        <Link href="/" passHref>
          <IoClose size="3ch" />
        </Link>
      </div>

      <div className="formsContainer">
        <div className="formOptions">
          <div className="options">
            <button
              className="formButtonOption active"
              onClick={(event) => {
                toogleColorButtons(event);

                setInformationsForm({
                  form: <CourseForm />,
                  img: <img src="assets/course.png" alt="forms draw" />,
                  description: (
                    <h1>
                      A opção <span>Curso</span> faz a criação de um novo curso.
                      Apenas o campo de descrição não é obrigatório.
                    </h1>
                  ),
                });
              }}
            >
              Curso
            </button>
            <button
              className="formButtonOption"
              onClick={(event) => {
                toogleColorButtons(event);

                setInformationsForm({
                  form: <StudentForm />,
                  img: <img src="assets/student.png" alt="forms draw" />,
                  description: (
                    <h1>
                      A opção <span>Estudante</span> permite a criação de um
                      novo aluno. Todos os campos exceto o de descrição de
                      deficiência são obrigatórios.
                    </h1>
                  ),
                });
              }}
            >
              Estudante
            </button>
            <button
              className="formButtonOption"
              onClick={(event) => {
                toogleColorButtons(event);

                setInformationsForm({
                  form: <TeacherForm />,
                  img: <img src="assets/teacher.png" alt="forms draw" />,
                  description: (
                    <h1>
                      A opção <span>Professor</span> permite a criação de um
                      novo instrutor. Todos os campos são obrigatórios.
                    </h1>
                  ),
                });
              }}
            >
              Professor
            </button>
          </div>

          {/* Here goes the different forms */}
          {informationsForm.form}
        </div>
      </div>

      <div className="formsInformations">
        {/* Here goes the forms information */}

        {informationsForm.description}
        {informationsForm.img}
      </div>
    </SFormsPage>
  );
}
