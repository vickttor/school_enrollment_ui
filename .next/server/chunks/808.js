"use strict";
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 9808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SFormsPage": () => (/* binding */ SFormsPage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SFormsPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2f15f7c4-0"
})`
  width: 100%;

  background: var(--background);
  padding: 2rem 1rem;
  position: relative;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .closeLink {
    cursor: pointer;
    pointer-events: fill;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 20px;
  }

  .formsContainer {
    flex-basis: 60%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 1rem;

    .formOptions {
      width: 80%;
      height: 650px;
      position: relative;
      margin: 1rem;
      background: var(--hue);
      border-radius: 2rem;

      .options {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 2rem auto;

        button {
          border: 2px solid limegreen;
          padding: 1rem;
          cursor: pointer;
          background: var(--hue);
          text-transform: uppercase;
          color: #fff;
          font-weight: bold;
          flex: 1;

          transition: background 0.3s;

          &.active {
            background: green;
          }
        }
      }
    }
  }

  .formsInformations {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    h1 {
      text-align: center;
      color: var(--text-title);
      font-size: 1.5rem;
      width: 70%;
      margin-bottom: 5rem;
      span {
        color: var(--text-body);
      }
    }

    img {
      width: 300px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
  }
`;



/***/ })

};
;