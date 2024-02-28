"use client";

import React from "react";
import { BrowserUserContext } from "../UserProvider/BrowserUserProvider";

function UserInfo() {
    const user = React.useContext(BrowserUserContext);
    return "Welcome " + user.username;
}

export default UserInfo;