"use client";

import React from "react";
import { io } from "socket.io-client";
import { BrowserUserContext } from "@/components/UserProvider/BrowserUserProvider";

export const SocketContext = React.createContext();

function SocketContextProvider({ children }) {
  const [socket, setSocket] = React.useState(null);
  const [socketLoading, setSocketLoading] = React.useState(true);
  const user = React.useContext(BrowserUserContext);
  React.useEffect(() => {
    const nextSocket = io("ws://localhost:3001", {
      auth: {
        uuid: user.uuid,
      },
    });
    setSocket(nextSocket);

    return () => nextSocket.disconnect();
  }, []);

  React.useEffect(() => {
    if (socket) {
      function markSocketLoaded() {
        setSocketLoading(false);
      }
      socket.on("connect", markSocketLoaded);

      return () => socket.off("connect", markSocketLoaded);
    }
  });

  React.useEffect(() => {
    if (socket) {
      function markSocketLoading() {
        setSocketLoading(true);
      }

      socket.on("disconnect", markSocketLoading);

      return () => socket.off("disconnect", markSocketLoading);
    }
  });

  return (
    <SocketContext.Provider value={{ socket, socketLoading }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketContextProvider;
