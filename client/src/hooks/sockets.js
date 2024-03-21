import { SocketContext } from "@/components/SocketContextProvider";
import React from "react";

function useSocketOn(eventName, callback) {
    const {socket} = React.useContext(SocketContext);

    React.useEffect(()=> {
        if(socket) {
            socket.on(eventName, callback);
            return () => socket.off(eventName, callback);
        }
    }, [socket])
}

export default useSocketOn;