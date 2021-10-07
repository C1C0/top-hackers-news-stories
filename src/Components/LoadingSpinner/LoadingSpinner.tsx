import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../State/reducers/reducers";

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner: React.FC = () => {
  const spinnerState = useSelector((state: State) => state.spinner);

  console.log(spinnerState);

  return (
    <>
      {spinnerState && (
        <SpinnerWrapper>
          <Spinner>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Spinner>
        </SpinnerWrapper>
      )}
    </>
  );
};

export default LoadingSpinner;
