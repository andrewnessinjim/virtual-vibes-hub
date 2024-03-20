"use client";

import styled from "styled-components"
import StButton from "@/components/StButton";
import { motion } from "framer-motion";

export const StRoomCard = styled(motion.div)`
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