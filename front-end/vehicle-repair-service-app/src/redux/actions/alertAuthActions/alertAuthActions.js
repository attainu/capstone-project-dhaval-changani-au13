import { customerAuthStatusTypes } from "../../actionTypes/actionTypes";

const alertAuthActions = {
    loginSuccessMessage: (payload) => ({ type: customerAuthStatusTypes.loginSuccessMessage, payload }),
    loginFailureMessage: (payload) => ({ type: customerAuthStatusTypes.loginFailureMessage, payload }),

}

export default alertAuthActions;