"use client";

import React from "react";

import { Spline_Sans_Mono, Work_Sans } from "next/font/google";

import { teal, tealDark, sage, sageDark } from "@radix-ui/colors";
import { ThemeProvider } from "styled-components";
import Cookies from "js-cookie";
export const AppThemeContext = React.createContext();

const lightTheme = {
  colors: {
    ...teal,
    ...sage,
  },
};

const darkTheme = {
  colors: {
    ...tealDark,
    ...sageDark,
  },
};

function ClientThemedRoot({ children, initialTheme }) {
  const [currentTheme, setCurrentTheme] = React.useState(initialTheme);
  const themeSettings = currentTheme === "light" ? lightTheme : darkTheme;

  function toggleTheme() {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(nextTheme);
    Cookies.set("color-theme", nextTheme, {
      expires: 1000,
    });
  }

  function isDarkMode() {
    return currentTheme === "dark";
  }

  return (
    <AppThemeContext.Provider
      value={{ currentTheme, toggleTheme, isDarkMode: isDarkMode() }}
    >
      <ThemeProvider theme={themeSettings}>
        <ThemedRoot>{children}</ThemedRoot>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

function ThemedRoot(props) {
  const { currentTheme } = React.useContext(AppThemeContext);

  return (
    <html
      data-color-theme={currentTheme}
      className={`${mainFont.variable} ${monoFont.variable}`}
      lang="en"
      {...props}
    />
  );
}

export default ClientThemedRoot;
