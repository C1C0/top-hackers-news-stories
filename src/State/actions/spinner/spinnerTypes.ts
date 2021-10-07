export enum SpinnerActionType{
    ACTIVATE_SPINNER = "[ACTIVATE SPINNER]",
    DEACTIVATE_SPINNER = "[DEACTIVATE SPINNER]",
}

interface ActivateSpinner{
    type: SpinnerActionType.ACTIVATE_SPINNER
}

interface DeactivateSpinner{
    type: SpinnerActionType.DEACTIVATE_SPINNER
}

export type Action = ActivateSpinner | DeactivateSpinner;