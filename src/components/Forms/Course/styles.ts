import styled from "styled-components";

const SCourseForm = styled.form`
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

export { SCourseForm };
