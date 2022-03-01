import styled from "styled-components";

const SFilter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  .filterCard {
    padding: 1rem 1.5rem;
    background: var(--background);
    border-radius: 1rem;
    box-shadow: 1px 1px 3px var(--text-title);
    width: min(500px, 90%);
    text-align: center;
    position: relative;

    img {
      width: 250px;
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
      width: 100%;
    }

    .buttonsField {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 2rem;
      gap: 1rem;

      button {
        border: 0;
        border-radius: 0.4rem;
        padding: 0.8rem;
        color: #fff;
        background: var(--hue);
        cursor: pointer;
        font-weight: bold;
        flex: 1;

        &:hover {
          filter: brightness(0.9);
        }
      }

      button:first-child {
        background: var(--red-error);
      }
    }
  }
`;

export { SFilter };
