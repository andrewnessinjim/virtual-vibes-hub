import React from "react";
import { StJoinButton, StRoomCard, StRoomTitle, StRoomsWrapper, StWrapper } from "./Lobby.styled";
import HeroButton from "../StButton/HeroButton";
import { getAllRooms } from "@/utils/roomsDb";

async function Lobby() {
  const data = await getAllRooms();  
  return (
    <StWrapper>
      <HeroButton>Create Room</HeroButton>
      {data && 
        <StRoomsWrapper>
          {data.map(roomData => (
          <StRoomCard key={roomData._id}>
            <StRoomTitle>{roomData.roomName}</StRoomTitle>
            <StJoinButton variant="miniAction">Join</StJoinButton>
          </StRoomCard>
          ))}
        </StRoomsWrapper>
      }
      
    </StWrapper>
  );
}

export default Lobby;
