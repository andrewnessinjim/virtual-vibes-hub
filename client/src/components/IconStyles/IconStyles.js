import { css } from "styled-components";

const IconStyles = css`
  color: ${(p) => p.theme.colors.teal9};
  cursor: pointer;
  transition: 150ms ease-in-out color, 150ms ease-in-out transform;
  &:hover {
    color: ${(p) => p.theme.colors.teal11};
    transform: scale(1.2);
  }
`;

export default IconStyles;
