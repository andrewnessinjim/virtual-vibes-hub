import { getRoom } from "@/utils/roomsDb";
import React from "react";
import { StGameBoard, StProgressBoard, StTitle, StWrapper } from "./Room.styled";
import WordleGrid from "@/components/WordleGrid";
import Spacer from "../Spacer";
import { FULL_GAME_ONLY_HINTS, PARTIAL_GAME, PARTIAL_GAME_ONLY_HINTS } from "./testData";

async function Room({ roomId }) {
  const roomData = await getRoom(roomId);
  console.log(roomId);
  return (
    <StWrapper>
      <StTitle>{roomData.roomName}</StTitle>
      <Spacer size={48}/>
      <StGameBoard>
        <WordleGrid guesses={PARTIAL_GAME} variant="full"/>
        <StProgressBoard>
          <WordleGrid guesses={FULL_GAME_ONLY_HINTS} variant={"mini"}/>
          <WordleGrid guesses={PARTIAL_GAME_ONLY_HINTS} variant={"mini"}/>
        </StProgressBoard>
      </StGameBoard>
    </StWrapper>
  );
}

export default Room;
