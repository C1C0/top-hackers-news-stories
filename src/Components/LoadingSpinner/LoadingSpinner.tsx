import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../State/reducers/reducers";
import { Spinner, SpinnerWrapper } from "./SpinnerStyleComponents";

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
