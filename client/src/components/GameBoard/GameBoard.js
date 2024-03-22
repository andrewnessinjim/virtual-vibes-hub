"use client";

import React from "react";
import { Wrapper } from "./GameBoard.styled";
import { BrowserUserContext } from "../UserProvider/BrowserUserProvider";
import { useSocketAck } from "@/hooks/sockets";
import Spinner from "../../../public/spinner";

function GameBoard({ roomId, children }) {
  const [roomJoined, setRoomJoined] = React.useState(false);

  const user = React.useContext(BrowserUserContext);
  useSocketAck(
    "join-room",
    {
      roomId,
      user,
    },
    (response) => {
      if (response.success) setRoomJoined(true);
    }
  );

  return <Wrapper>{roomJoined? children : <Spinner/>}</Wrapper>;
}

export default GameBoard;
