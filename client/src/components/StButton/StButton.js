"use client";

import React from "react";
import { StWrapper } from "./StButton.styled";
import { useTheme } from "styled-components";
import Link from "next/link";

function StButton({variant, href, ...delegated}) {
  const theme = useTheme();
  const Tag = href ? Link : "button";
  const STYLES = {
    primary: {
      "--background": theme.colors.teal7,
      "--color": theme.colors.sage12,
      "--border": "none",
      "--fontWeight": 700,
      "--padding": "8px 16px",
      "--borderRadius": "8px"
    },
    ghost: {
      "--background": "none",
      "--color": theme.colors.teal12,
      "--border": `2px solid ${theme.colors.teal12}`,
      "--fontWeight": 700,
      "--padding": "8px 16px",
      "--borderRadius": "8px"
    },
    miniAction: {
      "--background": theme.colors.sage3,
      "--color": theme.colors.sage12,
      "--border": "none",
      "--fontWeight": 500,
      "--padding": "4px 12px",
      "--borderRadius": "4px"
    }
  }

  return (
    <StWrapper
      as={Tag}
      href={href}
      style={{
        ...STYLES[variant]
      }}
      {...delegated}
    />
  );
}

export default StButton;
