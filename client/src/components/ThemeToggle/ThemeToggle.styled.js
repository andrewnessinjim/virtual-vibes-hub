"use client";

import styled, { css } from "styled-components";
import MoonIcon from "../../../public/moon-icon";
import SunIcon from "../../../public/sun-icon";

export const StWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const iconStyles = css`
  color: ${(p) => p.theme.colors.teal9};
  cursor: pointer;
  transition: 150ms ease-in-out color, 150ms ease-in-out transform;
  &:hover {
    color: ${(p) => p.theme.colors.teal11};
    transform: scale(1.2);
  }
`;

export const StMoonIcon = styled(MoonIcon)`
  ${iconStyles}
`;

export const StSunIcon = styled(SunIcon)`
  ${iconStyles}
`;
