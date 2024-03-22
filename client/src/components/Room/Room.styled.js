"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StWrapper = styled(motion.main)``;

export const StTitle = styled.h2`
  text-align: center;
`;

export const StPlayBoard = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

export const StDashboard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed ${(p) => p.theme.colors.sage4};
  width: 40%;
  gap:16px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;