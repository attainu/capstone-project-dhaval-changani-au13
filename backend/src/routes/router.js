import express from "express";

// import passport from "passport";
import { auth_customer, auth_serviceman } from "../middlewares/auth.js";
import {
    customerLogin,
    customerProfile,
    customerSignup,
    servicemanLogin,
    servicemanSignup,
    servicemanProfile,
} from "../controller/authControler.js";
import "../controller/googleAuth.js";

const router = express.Router();

router.post("/customer-signup", customerSignup);
router.post("/customer-login", customerLogin);

router.post("/serviceman-signup", servicemanSignup);
router.post("/serviceman-login", servicemanLogin);

router.get("/customer-profile", auth_customer, customerProfile);
router.get("/serviceman-profile", auth_serviceman, servicemanProfile);

// router.get("/location-save", saveLocation);

export default router;
