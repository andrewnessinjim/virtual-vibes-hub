"use client";

import React from "react";
import { BrowserUserContext } from "../UserProvider/BrowserUserProvider";
import { AppThemeContext } from "../ThemedRoot/ClientThemedRoot";

function UserInfo() {
    const user = React.useContext(BrowserUserContext);
    const {currentTheme} = React.useContext(AppThemeContext);
    return `Welcome  ${user.username}, Your theme is ${currentTheme}`;
}

export default UserInfo;