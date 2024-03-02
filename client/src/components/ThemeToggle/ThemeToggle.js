"use client";

import React from "react";
import { StMoonIcon, StSunIcon, StWrapper } from "./ThemeToggle.styled";
import { AppThemeContext } from "../ThemedRoot/ClientThemedRoot";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = React.useContext(AppThemeContext);

  return (
    <StWrapper onClick={toggleTheme}>
      {isDarkMode ? (
      <StMoonIcon width={22} height={22} />
      ) : (
      <StSunIcon width={22} height={22} />
      )}
    </StWrapper>
  );
}

export default ThemeToggle;
