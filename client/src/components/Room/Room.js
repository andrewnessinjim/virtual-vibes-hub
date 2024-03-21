import { getRoom } from "../../../../server/db/roomsDb";
import React from "react";
import {
  StGameBoard,
  StPlayBoard,
  StDashboard,
  StTitle,
  StWrapper,
} from "./Room.styled";
import WordleGrid from "@/components/WordleGrid";
import Spacer from "../Spacer";
import {
  FULL_GAME_ONLY_HINTS,
  PARTIAL_GAME,
  PARTIAL_GAME_ONLY_HINTS,
} from "./testData";
import WordleKeyboard from "../WordleKeyboard";
import GameFeeds from "../GameFeeds";
import ProgressBoard from "../ProgressBoard";

async function Room({ roomId }) {
  const roomData = await getRoom(roomId);
  console.log(roomId);
  return (
    <StWrapper
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <StTitle>{roomData.roomName}</StTitle>
      <Spacer size={24} />
      <StGameBoard>
        <StPlayBoard>
          <WordleGrid guesses={[]} variant="full" />
          <WordleKeyboard />
        </StPlayBoard>
        <StDashboard>
          <ProgressBoard/>
          <GameFeeds />
        </StDashboard>
      </StGameBoard>
    </StWrapper>
  );
}

export default Room;
