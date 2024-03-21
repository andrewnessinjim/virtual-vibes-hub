"use client";

import styled from "styled-components";

export const StWrapper = styled.ol`
    margin: 0;
    padding: 16px;
    list-style: none;
    height: 200px;
    color: ${p => p.theme.colors.teal12};
    overflow-y: auto;
`;

export const StFeed = styled.li`
    margin-bottom: 4px;
`;

export const StPlayer = styled.span`
    font-weight: 700;
`

export const StEvent = styled.span`
    font-style: italic;
`;