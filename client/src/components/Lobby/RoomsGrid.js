"use client";

import React from "react";
import { SocketContext } from "../SocketContextProvider";
import RoomPreview from "./RoomPreview";
import styled from "styled-components";

function RoomsGrid({initialRooms}) {
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


  React.useEffect(() => {
    if (socket) {
      function addNewRoom(newRoom) {
        setRooms(currentRooms => {
          const nextRooms = [...currentRooms];
          nextRooms.push(newRoom);
          return nextRooms;
        })
      }

      socket.on("room-created", addNewRoom);
      return () => socket.off("room-created", addNewRoom);
    }
  }, [socket]);

  return (
    <StWrapper>
      {rooms.map((roomData) => (
        <RoomPreview key={roomData._id} roomData={roomData} />
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
