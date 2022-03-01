"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228,968];
exports.modules = {

/***/ 4507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FormsPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/toggleColorButtons.ts
function toogleColorButtons(event) {
    const buttons = document.querySelectorAll(".formButtonOption");
    buttons.forEach((button)=>{
        button.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
}

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Forms/Student/styles.ts

const SStudentForm = external_styled_components_default().form.withConfig({
    componentId: "sc-d67a5409-0"
})`
  padding: 1rem;
  border-radius: 1rem;
  background: var(--background);
  width: 100%;
  // remove this height
  height: 90%;
  box-shadow: 1px 1px 3px var(--text-title);
  position: absolute;
  bottom: -50px;
  left: -50px;

  .inputsInLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  input,
  select {
    padding: 1rem;
    color: white;
    background: var(--text-body);
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: none;
    font-weight: bold;

    outline-color: var(--hue);
    flex: 1;
  }

  p {
    font-weight: bold;
    color: var(--text-body);
    margin-top: 1rem;
  }

  .gender,
  .deficiency {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 1rem;

    gap: 1rem;

    div {
      input {
        margin-right: 1rem;
      }
    }
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;

    border: 0;
    border-radius: 0.4rem;
    padding: 1rem;
    color: #fff;
    background: var(--hue);
    cursor: pointer;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


;// CONCATENATED MODULE: ./src/components/Forms/Student/index.tsx


function StudentForm() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SStudentForm, {
        method: "POST",
        action: "http://localhost:333/students",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Nome completo do aluno",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "date",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "E-mail",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "tel",
                        placeholder: "(11) 12345-6789",
                        pattern: "([0-9]{2}) [0-9]{5}-[0-9]{4}",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "CPF: Apenas os n\xfameros"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        name: "courses",
                        id: "courses",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Desenvolvimento de Sistemas"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Marketing Digital"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Administra\xe7\xe3o"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Gen\xearo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "gender",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "man",
                                name: "gender",
                                value: "Homem",
                                onChange: ()=>{},
                                checked: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "man",
                                children: "Homem"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "woman",
                                name: "gender",
                                value: "Mulher",
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "woman",
                                children: "Mulher"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "another",
                                name: "gender",
                                value: "Outro",
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "another",
                                children: "Outro"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Possu\xed alguma defici\xeancia?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "deficiency",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "positive",
                                name: "deficiency",
                                value: "Homem",
                                onChange: ()=>{},
                                checked: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "positive",
                                children: "Sim"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "negative",
                                name: "deficiency",
                                value: "Mulher",
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "negative",
                                children: "N\xe3o"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Se sim, qual?"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Cadastrar"
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/Forms/Teacher/styles.ts

const STeacherForm = external_styled_components_default().form.withConfig({
    componentId: "sc-6eba36a4-0"
})`
  padding: 1rem;
  border-radius: 1rem;
  background: var(--background);
  width: 100%;
  // remove this height
  height: 550px;
  box-shadow: 1px 1px 3px var(--text-title);
  position: absolute;
  bottom: -20px;
  left: -50px;

  .inputsInLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  input,
  select {
    padding: 1rem;
    color: white;
    background: var(--text-body);
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: none;
    font-weight: bold;

    outline-color: var(--hue);
    flex: 1;
  }

  p {
    font-weight: bold;
    color: var(--text-body);
    margin-top: 1rem;
  }

  .gender {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 1rem;

    gap: 1rem;

    div {
      input {
        margin-right: 1rem;
      }
    }
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;

    border: 0;
    border-radius: 0.4rem;
    padding: 1rem;
    color: #fff;
    background: var(--hue);
    cursor: pointer;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


;// CONCATENATED MODULE: ./src/components/Forms/Teacher/index.tsx


function TeacherForm() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(STeacherForm, {
        method: "POST",
        action: "http://localhost:333/teachers",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Nome completo do Professor",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "date",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "E-mail",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "tel",
                        placeholder: "(11) 12345-6789",
                        pattern: "([0-9]{2}) [0-9]{5}-[0-9]{4}",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inputsInLine",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "CPF: Apenas os n\xfameros"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        name: "courses",
                        id: "courses",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Desenvolvimento de Sistemas"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Marketing Digital"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id_do_curso",
                                children: "Administra\xe7\xe3o"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Gen\xearo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "gender",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "man",
                                name: "gender",
                                value: "Homem",
                                onChange: ()=>{},
                                checked: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "man",
                                children: "Homem"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "woman",
                                name: "gender",
                                value: "Mulher",
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "woman",
                                children: "Mulher"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "another",
                                name: "gender",
                                value: "Outro",
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "another",
                                children: "Outro"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Cadastrar"
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/Forms/Course/styles.ts

const SCourseForm = external_styled_components_default().form.withConfig({
    componentId: "sc-447568e2-0"
})`
  padding: 1rem;
  border-radius: 1rem;
  background: var(--background);
  width: 100%;
  // remove this height
  height: 550px;
  box-shadow: 1px 1px 3px var(--text-title);
  position: absolute;
  bottom: -20px;
  left: -50px;

  input,
  select,
  textarea {
    padding: 1rem;
    color: white;
    background: var(--text-body);
    border-radius: 0.5rem;
    margin: 1rem 0;
    border: none;
    font-weight: bold;

    outline-color: var(--hue);
    width: 100%;
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 200px;
  }

  p {
    font-weight: bold;
    color: var(--text-body);
    margin-top: 1rem;
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;

    border: 0;
    border-radius: 0.4rem;
    padding: 1rem;
    color: #fff;
    background: var(--hue);
    cursor: pointer;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


;// CONCATENATED MODULE: ./src/components/Forms/Course/index.tsx


function CourseForm() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SCourseForm, {
        method: "POST",
        action: "http://localhost:333/courses",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "T\xedtulo do curso",
                required: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                name: "description",
                id: "description",
                rows: 10,
                placeholder: "Descri\xe7\xe3o do curso (Opcional)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Per\xedodo "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                name: "courses",
                id: "courses",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Manh\xe3",
                        children: "Manh\xe3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Tarde",
                        children: "Tarde"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "Noite",
                        children: "Noite"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Cadastrar"
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/pages/forms/styles.ts
var styles = __webpack_require__(9808);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-icons/io5/index"
const index_namespaceObject = require("react-icons/io5/index");
;// CONCATENATED MODULE: ./src/pages/forms/index.tsx

// React

// Utils

// Form Components



// Styles



function FormsPage() {
    // The first form to be show is CourseForm. The forms changes by clicking on buttons
    const [informationsForm, setInformationsForm] = external_react_.useState({
        form: /*#__PURE__*/ jsx_runtime_.jsx(CourseForm, {}),
        img: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "assets/course.png",
            alt: "forms draw"
        }),
        description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            children: [
                "A op\xe7\xe3o ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "\"Curso\""
                }),
                " faz a cria\xe7\xe3o de um novo curso. Apenas o campo de descri\xe7\xe3o n\xe3o \xe9 obrigat\xf3rio."
            ]
        })
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.SFormsPage, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "closeLink",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_namespaceObject.IoClose, {
                        size: "3ch"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "formsContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "formOptions",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "options",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "formButtonOption active",
                                    onClick: (event)=>{
                                        toogleColorButtons(event);
                                        setInformationsForm({
                                            form: /*#__PURE__*/ jsx_runtime_.jsx(CourseForm, {}),
                                            img: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/course.png",
                                                alt: "forms draw"
                                            }),
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                children: [
                                                    "A op\xe7\xe3o ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "\"Curso\""
                                                    }),
                                                    " faz a cria\xe7\xe3o de um novo curso. Apenas o campo de descri\xe7\xe3o n\xe3o \xe9 obrigat\xf3rio."
                                                ]
                                            })
                                        });
                                    },
                                    children: "Curso"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "formButtonOption",
                                    onClick: (event)=>{
                                        toogleColorButtons(event);
                                        setInformationsForm({
                                            form: /*#__PURE__*/ jsx_runtime_.jsx(StudentForm, {}),
                                            img: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/student.png",
                                                alt: "forms draw"
                                            }),
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                children: [
                                                    "A op\xe7\xe3o ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "\"Estudante\""
                                                    }),
                                                    " permite a cria\xe7\xe3o de um novo aluno. Todos os campos exceto o de descri\xe7\xe3o de defici\xeancia s\xe3o obrigat\xf3rios."
                                                ]
                                            })
                                        });
                                    },
                                    children: "Estudante"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "formButtonOption",
                                    onClick: (event)=>{
                                        toogleColorButtons(event);
                                        setInformationsForm({
                                            form: /*#__PURE__*/ jsx_runtime_.jsx(TeacherForm, {}),
                                            img: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/teacher.png",
                                                alt: "forms draw"
                                            }),
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                children: [
                                                    "A op\xe7\xe3o ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "\"Professor\""
                                                    }),
                                                    " permite a cria\xe7\xe3o de um novo instrutor. Todos os campos s\xe3o obrigat\xf3rios."
                                                ]
                                            })
                                        });
                                    },
                                    children: "Professor"
                                })
                            ]
                        }),
                        informationsForm.form
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "formsInformations",
                children: [
                    informationsForm.description,
                    informationsForm.img
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,808], () => (__webpack_exec__(4507)));
module.exports = __webpack_exports__;

})();