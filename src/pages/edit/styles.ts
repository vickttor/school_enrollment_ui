import styled from "styled-components";

const SEditPage = styled.div`
  width: 100%;

  background: var(--background);
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .turnsBackLink {
    cursor: pointer;
    pointer-events: fill;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 1;
    left: 20px;
    top: 20px;
  }

  .excludeButton {
    cursor: pointer;
    pointer-events: fill;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 20px;
    color: red;
  }

  .formsContainer {
    flex-basis: 60%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 1rem;

    .formTemplate {
      width: 80%;
      height: 600px;
      position: relative;
      margin: 1rem;
      background: var(--hue);
      border-radius: 2rem;
    }

    .success {
      width: 80%;
      margin: 3rem auto;

      border: 2px solid limegreen;
      border-radius: 0.4rem;
      padding: 1rem 2rem;
      text-align: center;
      background: rgba(250, 250, 250, 0.5);

      h2 {
        text-transform: capitalize;
      }

      .nextStep {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;

        button {
          border: none;
          padding: 1rem;
          cursor: pointer;
          background: var(--background-fields);
          text-transform: uppercase;
          color: #fff;
          font-weight: bold;
          border-radius: 0.5rem;
        }
      }
    }
  }

  .formsInformations {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

export default SEditPage;
