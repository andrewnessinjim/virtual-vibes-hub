import { getRoom } from "../../../../server/db/roomsDb";
import React from "react";
import {
  StGameBoard,
  StGridProgress,
  StPlayBoard,
  StProgressBoard,
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
import PlayerGridProgress from "../PlayerGridProgress";
import GameFeeds from "../GameFeeds";

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
      <Spacer size={48} />
      <StGameBoard>
        <StPlayBoard>
          <WordleGrid guesses={PARTIAL_GAME} variant="full" />
          <WordleKeyboard />
        </StPlayBoard>
        <StProgressBoard>
          <StGridProgress>
            <PlayerGridProgress
              guesses={FULL_GAME_ONLY_HINTS}
              variant={"mini"}
              playerName="Papipa"
            />
            <PlayerGridProgress
              guesses={PARTIAL_GAME_ONLY_HINTS}
              variant={"mini"}
              playerName="Rashumi"
            />
          </StGridProgress>
          <GameFeeds />
        </StProgressBoard>
      </StGameBoard>
    </StWrapper>
  );
}

export default Room;
