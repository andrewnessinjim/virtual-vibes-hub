import React from "react";
import { StWrapper } from "./Lobby.styled";
import { getAllRooms } from "../../../../server/db/roomsDb";
import CreateRoomButton from "./CreateRoomButton";
import RoomsGrid from "./RoomsGrid";

export const dynamic = "force-dynamic";

async function Lobby() {
  const initialRooms = await getAllRooms();

  return (
    <StWrapper>
      <CreateRoomButton />
      <RoomsGrid initialRooms={initialRooms} />
    </StWrapper>
  );
}

export default Lobby;
