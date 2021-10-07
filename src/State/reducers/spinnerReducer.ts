import { Action, SpinnerActionType } from "../actions/spinner/spinnerTypes";

const inistialState: boolean = true;

export const spinnerReducer = (
  state: boolean = inistialState,
  action: Action
) => {
  switch (action.type) {
    case SpinnerActionType.ACTIVATE_SPINNER:
      return true;
    case SpinnerActionType.DEACTIVATE_SPINNER:
      return false;
    default:
      return state;
  }
};
