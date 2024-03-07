import React from "react";
import { StCell, StRow, StWrapper } from "./WordleKeyboard.styled";

const FIRST_ROW = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const SECOND_ROW = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const THIRD_ROW = ["Z", "X", "C", "V", "B", "N", "M"];

const ALL_ROWS = [FIRST_ROW, SECOND_ROW, THIRD_ROW];
function WordleKeyboard() {
  return (
    <StWrapper>
      {ALL_ROWS.map((row, index) => (
        <StRow key={index}>
          {row.map((letter) => (
            <StCell key={letter}>{letter}</StCell>
          ))}
        </StRow>
      ))}
    </StWrapper>
  );
}

export default WordleKeyboard;
