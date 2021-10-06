import styled from "@emotion/styled";
import React from "react";
import { Story } from "../Story/Story";

export const Stories: React.FC = () => {
  return (
    <StoriesWrapper>
      <Story
        from="dHustom4369"
        title="Title"
        timestamp="01.01.1990 at 14:34"
        text="Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K? </p>... Read more"
      />
      <Story
        from="dHustom4369"
        title="Title"
        timestamp="01.01.1990 at 14:34"
        text="Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K? </p>... Read more"
      />
            <Story
        from="dHustom4369"
        title="Title"
        timestamp="01.01.1990 at 14:34"
        text="Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K? </p>... Read more"
      />
            <Story
        from="dHustom4369"
        title="Title"
        timestamp="01.01.1990 at 14:34"
        text="Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K? </p>... Read more"
      />
    </StoriesWrapper>
  );
};

const StoriesWrapper = styled.div`
  margin-top: 60px;
`;
