import React from "react";
import UserInfo from "./UserInfo";
import { StActionsContainer, StHomeIcon, StHomeLink, StUserIcon, StWrapper } from "./Header.styled";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

function Header() {
  return (
    <StWrapper>
      <StHomeLink href="/">
        <StHomeIcon width={22} height={22}/>
      </StHomeLink>
      <UserInfo />
      <StActionsContainer>
        <ThemeToggle />
      </StActionsContainer>
    </StWrapper>
  );
}

export default Header;
