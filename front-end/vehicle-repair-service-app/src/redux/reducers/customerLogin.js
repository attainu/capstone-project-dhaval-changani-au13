import { customerAuthTypes } from "../actionTypes/actionTypes"
import cookie from "react-cookie";


const initialState = {
    customerToken: !!cookie.load('customerToken')
}

const customerLogin = (state,action) => {
    state = state || initialState

    switch(action.type){
        case customerAuthTypes.customerLogin: {
            cookie.save('customerToken', state.customerToken, {path: '/'});
            return true
        }
        case customerAuthTypes.customerLogout: {
            cookie.remove('customerToken', {path: '/'})
            return false;
        }
        default:
            return state;
    }
}

export default customerLogin;