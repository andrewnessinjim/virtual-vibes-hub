import { cookies } from "next/headers";
import React from "react";
import ClientThemedRoot from "./ClientThemedRoot";

function ServerThemedRoot({ children }) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <ClientThemedRoot
      initialTheme={theme}>
        {children}
    </ClientThemedRoot>);
}

export default ServerThemedRoot;
