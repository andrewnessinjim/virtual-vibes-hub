"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StWrapper = styled(motion.main)``;

export const StTitle = styled.h2`
  text-align: center;
`;

export const StGameBoard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StPlayBoard = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

export const StProgressBoard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed ${(p) => p.theme.colors.sage4};
  padding: 16px;
  width: 40%;
`;

export const StGridProgress = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content:center;
`;