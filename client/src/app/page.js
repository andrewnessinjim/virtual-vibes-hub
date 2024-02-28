"use client";

import Header from "@/components/Header";
import { AppThemeContext } from "@/components/ThemedRoot/ClientThemedRoot";
import React from "react";

export default function Home() {
  const {toggleTheme} = React.useContext(AppThemeContext);
  return (
    <main>
      <Header/>
      <button onClick={toggleTheme}>Click</button>
    </main>
  );
}
