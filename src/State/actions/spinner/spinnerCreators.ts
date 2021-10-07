import { Dispatch } from "redux";
import { Action, SpinnerActionType } from "./spinnerTypes";

export const ActivateSpinner = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: SpinnerActionType.ACTIVATE_SPINNER,
        })
    }
}

export const DeactivateSpinner = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: SpinnerActionType.DEACTIVATE_SPINNER,
        })
    }
}