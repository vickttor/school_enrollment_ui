import styled from "styled-components";

const RocketDraw = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  color: var(--hue);
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 1;

  padding: 1rem;

  span img {
    width: 220px;
    transform: scaleX(-1);
  }

  img {
    width: 300px;
  }

  span::before {
    content: "";
    display: block;
    width: 300px;
    height: 300px;
    background: var(--background-fields);
    border-radius: 50%;
    position: fixed;
    z-index: -1;
    bottom: -200px;
    right: -50px;
  }
  span::after {
    content: "";
    display: block;
    width: 300px;
    height: 300px;
    background: var(--background-fields);
    border-radius: 50%;
    position: fixed;
    z-index: -1;
    bottom: -140px;
    left: -130px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export { RocketDraw };
