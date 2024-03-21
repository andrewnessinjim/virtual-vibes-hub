"use client";

import React from "react";
import RoomPreview from "./RoomPreview";
import styled from "styled-components";
import { useSocketAck, useSocketOn } from "@/hooks/sockets";

function RoomsGrid({ initialRooms }) {
  const [rooms, setRooms] = React.useState(initialRooms);

  function updateRooms(fetchedRooms) {
    setRooms(fetchedRooms);
  }
  useSocketAck("fetch-rooms", updateRooms);

  function addNewRoom(newRoom) {
    newRoom.introAnimation = true;
    setRooms((currentRooms) => {
      const nextRooms = [...currentRooms];
      nextRooms.push(newRoom);
      return nextRooms;
    });
  }
  useSocketOn("room-created", addNewRoom);

  return (
    <StWrapper>
      {rooms.map((roomData) => (
        <RoomPreview
          key={roomData._id}
          roomData={roomData}
          introAnimation={roomData.introAnimation}
        />
      ))}
    </StWrapper>
  );
}

export const StWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default RoomsGrid;
