import styled from "@emotion/styled";
import React from "react";
import { ColorPallete } from "../../Shared/design";
import * as fromInterfaces from "../../Shared/interfaces";
import { Hr } from "../SharableComponents/HR";

export const Story: React.FC<fromInterfaces.Story> = ({
  title,
  by,
  time,
  text,
}) => {
  return (
    <StoryBackground>
      <ByP>{by}</ByP>
      <TitleP>{title}</TitleP>
      <TimestampP>{time}</TimestampP>
      {text && (
        <>
          <Hr />
          <div>{text}</div>
        </>
      )}
    </StoryBackground>
  );
};

const StoryBackground = styled.div`
  background-color: ${ColorPallete.backgroundCard1};
  box-shadow: 5px 10px 5px ${ColorPallete.defaultCardShadow};
  padding: 28px 40px;
  margin-bottom: 40px;
`;

const ByP = styled.p`
  color: ${ColorPallete.mainSaturated};
  margin: 0;
  font-size: 1.1em;
`;

const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;
`;

const TimestampP = styled.p`
  color: ${ColorPallete.mainDarker};
  font-size: 0.8em;
`;
