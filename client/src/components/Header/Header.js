import React from "react";
import UserInfo from "./UserInfo";
import { StActionsContainer, StUserIcon, StWrapper } from "./Header.styled";
import ThemeToggle from "../ThemeToggle";

function Header() {
  return (
    <StWrapper>
      <UserInfo />
      <StActionsContainer>
        <ThemeToggle />
      </StActionsContainer>
    </StWrapper>
  );
}

export default Header;
