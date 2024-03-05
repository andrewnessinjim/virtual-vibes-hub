"use client";

import SiteWidthWrapper from "@/components/SiteWidthWrapper";
import styled from "styled-components";

export const StBody = styled.body`
    background: ${(p) => p.theme.colors.sage1};
    color: ${(p) => p.theme.colors.teal12};
`;

export const StMain = styled.main`
    ${SiteWidthWrapper};
`;