import React from "react";
import {
  StJoinButton,
  StRoomCard,
  StRoomTitle,
  StRoomsWrapper,
  StWrapper,
} from "./Lobby.styled";
import { getAllRooms } from "../../../../server/db/roomsDb";
import CreateRoomButton from "./CreateRoomButton";

async function Lobby() {
  const data = await getAllRooms();

  return (
    <StWrapper
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}>
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
