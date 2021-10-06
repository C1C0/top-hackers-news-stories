import styled from "@emotion/styled";
import React from "react";
import { ColorPallete } from "../../Shared/design";
import { Hr } from "../SharableComponents/HR";

interface Props {
  title: string;
  from: string;
  timestamp: string;
  text: string;
}

export const Story: React.FC<Props> = ({ title, from, timestamp, text }) => {
  return (
    <StoryBackground>
      <FromP>{from}</FromP>
      <TitleP>{title}</TitleP>
      <TimestampP>{timestamp}</TimestampP>
      <Hr />
      <div>{text}</div>
    </StoryBackground>
  );
};

const StoryBackground = styled.p`
  background-color: ${ColorPallete.backgroundCard1};
  box-shadow: 5px 10px 5px ${ColorPallete.defaultCardShadow};
  padding: 28px 40px;
  margin-bottom: 40px;
`;

const FromP = styled.p`
  color: ${ColorPallete.mainSaturated};
  margin: 0;
  font-size: 1.1em
`;

const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;
`;

const TimestampP = styled.p`
  color: ${ColorPallete.mainDarker};
  font-size: .8em;
`;
