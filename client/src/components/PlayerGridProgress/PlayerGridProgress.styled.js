"use client";

import styled from "styled-components";

export const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StWordleGridWrapper = styled.div`
    border: 4px solid ${p => p.theme.colors.sage5};
    padding: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const StPlayerName = styled.p`
    text-align: center;
    background-color: ${p => p.theme.colors.sage5};
    padding-bottom: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: ${p => p.theme.colors.sage12}
`;