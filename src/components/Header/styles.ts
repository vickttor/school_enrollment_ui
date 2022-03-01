import styled from "styled-components";

import { motion } from "framer-motion";

const SHeader = styled(motion.div)`
  width: 100%;

  // general settings
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 7rem;
  // img resize
  img {
    width: 80px;
    height: 80px;
  }

  // button filter styles
  a {
    text-transform: none;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    color: var(--dark-white);
    background: var(--background-fields);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    transition: filter 0.4s;
    &:hover {
      filter: brightness(0.95);
    }
  }

  @media (max-width: 720px) {
    img {
      width: 120px;
      height: 120px;
    }
    button {
      width: 60%;
    }

    flex-direction: column;
    gap: 3rem;
  }
`;

export { SHeader };
