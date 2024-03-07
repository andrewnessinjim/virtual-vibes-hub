import { getRoom } from "@/utils/roomsDb";
import React from "react";
import { StGameBoard, StGridAndKeyboard, StProgressBoard, StTitle, StWrapper } from "./Room.styled";
import WordleGrid from "@/components/WordleGrid";
import Spacer from "../Spacer";
import { FULL_GAME_ONLY_HINTS, PARTIAL_GAME, PARTIAL_GAME_ONLY_HINTS } from "./testData";
import WordleKeyboard from "../WordleKeyboard";

async function Room({ roomId }) {
  const roomData = await getRoom(roomId);
  console.log(roomId);
  return (
    <StWrapper>
      <StTitle>{roomData.roomName}</StTitle>
      <Spacer size={48}/>
      <StGameBoard>
        <StGridAndKeyboard>
          <WordleGrid guesses={PARTIAL_GAME} variant="full"/>
          <WordleKeyboard/>
        </StGridAndKeyboard>
        <StProgressBoard>
          <WordleGrid guesses={FULL_GAME_ONLY_HINTS} variant={"mini"}/>
          <WordleGrid guesses={PARTIAL_GAME_ONLY_HINTS} variant={"mini"}/>
        </StProgressBoard>
      </StGameBoard>
    </StWrapper>
  );
}

export default Room;
