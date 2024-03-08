import React from "react";
import {
  StJoinButton,
  StRoomCard,
  StRoomTitle,
  StRoomsWrapper,
  StWrapper,
} from "./Lobby.styled";
import { getAllRooms } from "@/utils/roomsDb";
import CreateRoomButton from "./CreateRoomButton";

async function Lobby() {
  const data = await getAllRooms();

  return (
    <StWrapper>
      <CreateRoomButton/>
      {data && (
        <StRoomsWrapper>
          {data.map((roomData) => (
            <StRoomCard key={roomData._id}>
              <StRoomTitle>{roomData.roomName}</StRoomTitle>
              <StJoinButton
                variant="miniAction"
                href={`/rooms/${roomData._id}`}
              >
                Join
              </StJoinButton>
            </StRoomCard>
          ))}
        </StRoomsWrapper>
      )}
    </StWrapper>
  );
}

export default Lobby;
