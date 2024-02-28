"use client"

import Cookies from "js-cookie";
import React from "react";

export const BrowserUserContext = React.createContext();

function BrowserUserProvider({user, children}){

    Cookies.set("uuid", user.uuid)
    return (
        <BrowserUserContext.Provider value={user}>
            {children}
        </BrowserUserContext.Provider>
    );
}

export default BrowserUserProvider;