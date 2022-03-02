import styled from "styled-components";

const SFormsPage = styled.div`
  width: 100%;

  background: var(--background);
  padding: 2rem 1rem;
  position: relative;
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
    width: 60%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 1rem;

    .formOptions {
      width: 90%;
      position: relative;
      margin: 1rem;
      background: var(--hue);
      border-radius: 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      .options {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
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

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: baseline;
    gap: 5rem;

    .formsContainer {
      width: 100%;
      align-items: center;
      margin: 0;
      padding: 0;
      .formoptions {
        flex: 1;

        margin: 0;
        padding: 0;

        .options {
          width: 100%;
          margin: 0.5rem;
          button {
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;

export default SFormsPage;
