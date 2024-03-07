"use client";

import styled, { css } from "styled-components";
import MoonIcon from "../../../public/moon-icon";
import SunIcon from "../../../public/sun-icon";
import IconStyles from "@/components/IconStyles";

export const StWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const StMoonIcon = styled(MoonIcon)`
  ${IconStyles}
`;

export const StSunIcon = styled(SunIcon)`
  ${IconStyles}
`;
