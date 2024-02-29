"use client";

import React from "react";
import { BrowserUserContext } from "../UserProvider/BrowserUserProvider";
import { StHello, StWrapper } from "./UserInfo.styled";

function UserInfo() {
  const user = React.useContext(BrowserUserContext);
  return (
    <StWrapper>
      <p>Hello</p>
      <StHello>{user.username}</StHello>
    </StWrapper>
  );
}

export default UserInfo;
