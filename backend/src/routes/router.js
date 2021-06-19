import express from "express";
import { auth_customer, auth_serviceman } from "../middlewares/auth.js";
import {
    customerLogin,
    customerProfile,
    customerSignup,
    servicemanLogin,
    servicemanSignup,
    servicemanProfile,
    googlelogin,
} from "../controller/authControler.js";

const router = express.Router();

router.post("/customer-signup", customerSignup);
router.post("/customer-login", customerLogin);
router.get("/customer-profile", auth_customer, customerProfile);

router.post("/serviceman-signup", servicemanSignup);
router.post("/serviceman-login", servicemanLogin);
router.get("/serviceman-profile", auth_serviceman, servicemanProfile);

router.post("/googlelogin", googlelogin);

export default router;
