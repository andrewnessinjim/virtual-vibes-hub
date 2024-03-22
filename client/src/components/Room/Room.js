import { getRoom } from "../../../../server/db/roomsDb";
import React from "react";
import {
  StPlayBoard,
  StDashboard,
  StTitle,
  StWrapper,
} from "./Room.styled";
import WordleGrid from "@/components/WordleGrid";
import Spacer from "../Spacer";
import WordleKeyboard from "../WordleKeyboard";
import GameFeeds from "../GameFeeds";
import ProgressBoard from "../ProgressBoard";
import GameBoard from "../GameBoard";

async function Room({ roomId }) {
  const roomData = await getRoom(roomId);

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
      <GameBoard roomId={roomId}>
        <StPlayBoard>
          <WordleGrid guesses={[]} variant="full" />
          <WordleKeyboard />
        </StPlayBoard>
        <StDashboard>
          <ProgressBoard/>
          <GameFeeds roomId={roomId}/>
        </StDashboard>
      </GameBoard>
    </StWrapper>
  );
}

export default Room;
