import { authTypes } from "../../actionTypes/actionTypes";

const authActions = {
    login: () => ({ type: authTypes.login }),
    logout: () => ({ type: authTypes.logout })
}

export default authActions;