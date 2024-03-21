"use client";

import React from "react";
import { SocketContext } from "@/components/SocketContextProvider";
import RoomPreview from "./RoomPreview";
import styled from "styled-components";
import useSocketOn from "@/hooks/sockets";

function RoomsGrid({ initialRooms }) {
  const { socket } = React.useContext(SocketContext);
  const [rooms, setRooms] = React.useState(initialRooms);

  React.useEffect(() => {
    if (socket) {
      function updateRooms(fetchedRooms) {
        setRooms(fetchedRooms);
      }
      socket.emit("fetch-rooms", updateRooms);
    }
  }, [socket]);

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
