"use client";

import styled from "styled-components";
import SiteWidthWrapper from "@/components/SiteWidthWrapper";
import HomeIcon from "../../../public/home-icon";
import IconStyles from "../IconStyles";
import Link from "next/link";

export const StWrapper = styled.header`
    ${SiteWidthWrapper}
    height: 72px;
    display: flex;
    align-items: center;
    gap: clamp(32px, 6vw, 64px);
    justify-content: flex-end;
`

export const StHomeIcon = styled(HomeIcon)`
    ${IconStyles}
`

export const StHomeLink = styled(Link)`
    margin-right: auto;
`;

export const StActionsContainer = styled.div`
    display: flex;
    gap: 24px;
`;
