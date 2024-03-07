"use client";

import styled from "styled-components";

export const StWrapper = styled.div`
  display: flex;
  gap: var(--cellGap);
`;

export const StLetterCell = styled.div`
  width: var(--cellSize);
  aspect-ratio: 1/1;
  border: var(--cellBorder);
  display: grid;
  place-content: center;
  font-size: 1.5rem;
  background-color: var(--cellBackgroundColor);
  color: ${(p) => p.theme.colors.sage12};
`;
