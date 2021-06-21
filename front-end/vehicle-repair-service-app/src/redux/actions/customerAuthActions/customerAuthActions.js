import { customerAuthTypes } from "../../actionTypes/actionTypes";

const customerAuthActions = {
    customerAuthLogin: () => ({ type: customerAuthTypes.customerLogin }),
    customerAuthLogout: () => ({ type: customerAuthTypes.customerLogout })
}

export default customerAuthActions;