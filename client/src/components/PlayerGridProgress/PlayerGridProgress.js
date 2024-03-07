import React from "react";
import WordleGrid from "@/components/WordleGrid";
import { StPlayerName, StWordleGridWrapper, StWrapper } from "./PlayerGridProgress.styled";

function PlayerGridProgress({ playerName, ...delagated }) {
  return (
    <StWrapper>
      <StWordleGridWrapper>
        <WordleGrid {...delagated} />
      </StWordleGridWrapper>
      <StPlayerName>{playerName}</StPlayerName>
    </StWrapper>
  );
}

export default PlayerGridProgress;
