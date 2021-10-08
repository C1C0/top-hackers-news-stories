import styled from "@emotion/styled";
import { ColorPallete } from "../../Shared/design";

export const StoryBackground = styled.div`
  background-color: ${ColorPallete.backgroundCard1};
  box-shadow: 5px 10px 5px ${ColorPallete.defaultCardShadow};
  padding: 28px 40px;
  margin-bottom: 40px;
`;

export const ByP = styled.p`
  color: ${ColorPallete.mainSaturated};
  margin: 0;
  font-size: 1.1em;

  + a {
    text-decoration: none;
  }
`;

export const KarmaP = styled.span`
  color: ${ColorPallete.defaultTextColor};
  margin-left: .5rem;
  font-size: .8em;

  &:before{
    content: "Karma:\\00a0"
  }
`;

export const TitleLink = styled.a`
  width: fit-content;
`;

export const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;
  width: fit-content;

  cursor: pointer;

  transition: transform 0.1s ease, text-shadow 0.1s ease;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 10px 15px 10px ${ColorPallete.defaultTextShadow};
  }
`;

export const UnderTitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const underlineItems = styled.p`
  margin-top: 5px;
  font-size: 0.9em;
  font-style: italic;
`;

export const TimestampP = styled(underlineItems)`
  color: ${ColorPallete.mainDarker};
`;

export const ScoreP = styled(underlineItems)`
  color: ${ColorPallete.secondaryColor};

  &:before {
    content: "[\\00a0";
  }

  &:after {
    content: "\\00a0]";
  }
`;

