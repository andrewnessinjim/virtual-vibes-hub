import React from "react";
import { StWrapper } from "./ProgressBoard.styled";
import PlayerGridProgress from "./PlayerGridProgress";
import { FULL_GAME_ONLY_HINTS, PARTIAL_GAME_ONLY_HINTS } from "../Room/testData";

function ProgressBoard() {
  return (
    <StWrapper>
      {/* <PlayerGridProgress
        guesses={FULL_GAME_ONLY_HINTS}
        variant={"mini"}
        playerName="Papipa"
      />  */}
      Waiting for players
    </StWrapper>
  );
}

export default ProgressBoard;
