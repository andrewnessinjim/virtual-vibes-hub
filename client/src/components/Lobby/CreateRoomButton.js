"use client";

import { useRouter } from "next/navigation";
import HeroButton from "../StButton/HeroButton";
import { useContext } from "react";
import { SocketContext } from "../SocketContextProvider";
import Spinner from "../../../public/spinner";
import styled from "styled-components";

const CreatRoomButton = styled(HeroButton)`
  width: 300px;
  height: 72px;
`;
function CreateRoomButton() {
  const router = useRouter();
  const { socket, socketLoading } = useContext(SocketContext);

  async function onCreateRoom(event) {
    event.preventDefault();

    socket.emit("create-room" , roomResponse => {
      if(roomResponse._id){
        router.push(`/rooms/${roomResponse._id}`);
      }
    });
  }

  return (
    <CreatRoomButton onClick={onCreateRoom}>
      {socketLoading ?
      <Spinner /> : "Create Room"
}
    </CreatRoomButton>
  );
}

export default CreateRoomButton;
