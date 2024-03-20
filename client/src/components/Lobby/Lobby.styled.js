"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const StWrapper = styled(motion.div)`
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;
