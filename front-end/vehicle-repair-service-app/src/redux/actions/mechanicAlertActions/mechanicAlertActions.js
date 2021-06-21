import { mechanicAuthStatusTypes } from "../../actionTypes/actionTypes";

const mechanicAlertActions = {
    mechanicRegSuccessMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechaniRegSuccessAlert, payload }),
    mechanicRegFailureMsg: (payload) => ({ type: mechanicAuthStatusTypes.mechanicRegFailureAlert, payload })
}

export default mechanicAlertActions;