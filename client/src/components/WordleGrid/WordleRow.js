"use client";

import { useTheme } from "styled-components";
import { StLetterCell, StWrapper } from "./WordleRow.styled";

const FIXED_GUESS_LENGTH = 5;

const CELL_COLORS = {
  correct: "hsl(150deg 70% 30%)",
  misplaced: "hsl(50deg 100% 30%)",
  incorrect: "hsl(0deg 70% 45%)",
};

function getBgColor(hint, theme) {
  switch (hint) {
    case null:
      return "none";
    case "incorrect":
      return theme.colors.sage9;
    default:
      return CELL_COLORS[hint];
  }
}

function getBorder(hint, theme) {
  switch (hint) {
    case null:
      return `1.5px solid ${theme.colors.sage10}`;
    default:
      return "none";
  }
}

function WordleRow({ guess }) {
  const theme = useTheme();
  if (!guess) {
    //Use empty hints
    guess = Array(FIXED_GUESS_LENGTH).fill({ hint: null });
  }

  return (
    <StWrapper>
      {guess.map((letterWithPossibleHint, index) => {
        const { hint, letter } = letterWithPossibleHint;
        return (
          <StLetterCell
            key={index}
            style={{
              "--cellBackgroundColor": getBgColor(hint, theme),
              "--cellBorder": getBorder(hint, theme),
            }}
          >
            {letter}
          </StLetterCell>
        );
      })}
    </StWrapper>
  );
}

export default WordleRow;
