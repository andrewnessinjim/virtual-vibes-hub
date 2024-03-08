"use client";

import { useRouter } from "next/navigation";
import HeroButton from "../StButton/HeroButton";

const ENDPOINT = "/api/rooms/";

function CreateRoomButton() {
    const router = useRouter();

  async function onCreateRoom(event) {
    event.preventDefault();

    console.log("Let's create a room!");
    const response =  await fetch(ENDPOINT, {
        method: "POST"
    });
    const json = await response.json();
    console.log(json);
    router.push(`/rooms/${json._id}`);
  }

  return <HeroButton onClick={onCreateRoom}>Create Room</HeroButton>;
}

export default CreateRoomButton;
