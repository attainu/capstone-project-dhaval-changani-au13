import { combineReducers } from "redux";
import loader from './loader';
import auth from './auth';
import modal from './modal';
import userAuth from './userAuthReg';
import customerLogin from './customerLogin';
import authAlert from "./authAlert";
import mechanicRegister from "./mechanicRegister";
import mechanicAuthAlert from "./mechanicAuthAlert";

export default combineReducers({
    auth,
    loader,
    modal,
    userAuth,
    customerLogin,
    authAlert,
    mechanicRegister,
    mechanicAuthAlert
});