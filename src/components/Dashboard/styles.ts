import styled from "styled-components";

import { motion } from "framer-motion";

const SDashboard = styled(motion.main)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  z-index: 2;

  .tableContainer {
    width: min(920px, 90%);
    overflow-x: scroll;
    margin: 3rem auto;
    border-radius: 0.8rem;
    height: max-content;
    box-shadow: 1px 1px 3px var(--text-title);

    table {
      width: 920px;

      border-radius: 0.8rem 0.8rem 0 0;
      background: var(--hue);
      filter: brightness(0.98);

      color: #fff;

      border-bottom: 6px solid var(--hue);

      thead {
        text-transform: uppercase;
        tr {
          th {
            padding: 1rem;
          }
          th:last-child #DataConfigIcon {
            cursor: pointer;
            pointer-events: fill;
          }
        }
      }

      tbody {
        background: var(--background);
        color: var(--text-body);
        tr {
          td {
            padding: 1rem;
            filter: brightness(1);
            font-weight: bold;
          }
          td:last-child .DataEditIcon {
            cursor: pointer;
            pointer-events: fill;
          }
        }
      }

      @media (max-width: 720px) {
        width: 720px;
      }
    }
  }

  @media (max-width: 720px) {
    top: 15rem;
  }
`;

export { SDashboard };
