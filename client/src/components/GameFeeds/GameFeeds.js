"use client";

import React from "react";
import { StEvent, StFeed, StPlayer, StWrapper } from "./GameFeeds.styled";

function GameFeeds() {
  const [feeds, setFeeds] = React.useState([
    {
      player: "Jimmy",
      event: "created the room",
    }
  ]);
  return (
    <StWrapper>
      {feeds.map((feed, index) => (
        <StFeed key={index}>
          <StPlayer>{feed.player}</StPlayer> <StEvent>{feed.event}</StEvent>
        </StFeed>
      ))}
    </StWrapper>
  );
}

export default GameFeeds;
