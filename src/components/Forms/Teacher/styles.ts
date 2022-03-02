import styled from "styled-components";

import { motion } from "framer-motion";

const STeacherForm = styled(motion.form)`
  padding: 1rem;
  border-radius: 1rem;
  background: var(--background);
  width: 100%;
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

export { STeacherForm };
