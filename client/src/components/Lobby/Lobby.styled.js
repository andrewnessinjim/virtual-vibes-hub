"use client";

import styled from "styled-components";
import StButton from "../StButton";

export const StWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const StRoomsWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StRoomCard = styled.div`
    background: ${p => p.theme.colors.sage11};
    width: 160px;
    height: 160px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StRoomTitle = styled.h3`
    color: ${p => p.theme.colors.teal4};
    padding: 4px 0px;
    font-weight: 500;
    text-align: center;
    font-size: 1.15rem;
`

export const StJoinButton = styled(StButton)`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-top: auto;
`
