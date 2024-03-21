import { SocketContext } from "@/components/SocketContextProvider";
import React from "react";

export function useSocketOn(eventName, callback) {
  const { socket } = React.useContext(SocketContext);

  React.useEffect(() => {
    if (socket) {
      socket.on(eventName, callback);
      return () => socket.off(eventName, callback);
    }
  }, [socket]);
}

export function useSocketAck(...args) {
  const { socket } = React.useContext(SocketContext);
  React.useEffect(() => {
    if (socket) {
      socket.emit(...args);
    }
  }, [socket]);
}
