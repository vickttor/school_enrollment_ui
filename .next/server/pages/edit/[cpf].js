"use strict";
(() => {
var exports = {};
exports.id = 341;
exports.ids = [341,896,968];
exports.modules = {

/***/ 3115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/pages/edit/styles.ts
var styles = __webpack_require__(9875);
;// CONCATENATED MODULE: ./src/pages/edit/[cpf].tsx

// Next Router

// Styles

function EditPage() {
    const router = (0,router_namespaceObject.useRouter)();
    const { cpf  } = router.query;
    return(/*#__PURE__*/ jsx_runtime_.jsx(styles.SEditPage, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Hello World"
        })
    }));
};


/***/ }),

/***/ 9875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEditPage": () => (/* binding */ SEditPage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SEditPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-ffeb1f96-0"
})`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 2rem;

  .editForm {
    background: var(--background);
    box-shadow: 1px 1px 3px var(--text-title);
    border: 2px solid var(--hue);
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    margin: 1rem;
  }
`;


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3115));
module.exports = __webpack_exports__;

})();