"use client";

import styled from "styled-components";
import SiteWidthWrapper from "@/components/SiteWidthWrapper";

export const StWrapper = styled.header`
    ${SiteWidthWrapper}
    height: 72px;
    display: flex;
    align-items: center;
    gap: clamp(32px, 6vw, 64px);
    justify-content: flex-end;
`

export const StActionsContainer = styled.div`

`;