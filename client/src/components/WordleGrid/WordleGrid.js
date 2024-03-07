import React from "react";
import WordleRow from "@/components/WordleGrid/WordleRow";
import { StWrapper } from "./WordleGrid.styled";
import { range } from "lodash";

const MAX_GUESSES_ALLOWED = 6;

const STYLES = {
  mini: {
    "--gridPadding": "8px",
    "--cellSize": "24px",
    "--cellGap": "2px",
  },
  full: {
    "--gridPadding": "16px",
    "--cellSize": "64px",
    "--cellGap": "4px",
  },
};

function WordleGrid({ guesses, variant }) {
  return (
    <StWrapper
      style={{
        ...STYLES[variant],
      }}
    >
      {guesses.map((guess, index) => (
        <WordleRow key={index} guess={guess} />
      ))}

      {/* Fill remaining rows with empty cells */}
      {range(guesses.length, MAX_GUESSES_ALLOWED).map((_, index) => (
        <WordleRow
          key={guesses.length + index}
          guess={null}
        />
      ))}
    </StWrapper>
  );
}

export default WordleGrid;
