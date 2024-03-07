"use client";

import styled from "styled-components";

export const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const StRow = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
`;

export const StCell = styled.button`
    border: none;
    color: ${p => p.theme.fixedColors.wordleKeyboardLetterColor};
    width: 40px;
    aspect-ratio: 1/1;
    background-color: ${p => p.theme.fixedColors.wordleKeyboardCellBg};
    display: grid;
    place-content: center;
    cursor: pointer;
    font-weight: 500;
    border-radius: 4px;
`