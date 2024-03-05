import { getRoom } from "@/utils/roomsDb";
import React from "react";
import { StTitle, StWrapper } from "./Room.styled";

async function Room({ roomId }) {
  const roomData = await getRoom(roomId);
  console.log(roomId);
  return (
    <StWrapper>
      <StTitle>{roomData.roomName}</StTitle>
      <pre>{JSON.stringify(roomData, null, 2)}</pre>
    </StWrapper>
  );
}

export default Room;
