import Header from "@/components/Header";
import StButton from "@/components/StButton";
import HeroButton from "@/components/StButton/HeroButton";
import React from "react";
import { StLobby } from "./app.styled";

export default function Home() {
  return (
    <main>
      <Header/>
      <StLobby>
        <HeroButton>Create Room</HeroButton>
      </StLobby>
    </main>
  );
}
