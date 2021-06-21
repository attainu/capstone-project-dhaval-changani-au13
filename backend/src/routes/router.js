import express from "express";
import { auth_customer, auth_serviceman } from "../middlewares/auth.js";
import {
    customerLogin,
    customerProfile,
    customerSignup,
    servicemanLogin,
    servicemanSignup,
    servicemanProfile,
    updateLocationCustomer,
    updateLocationService,
    addService,
} from "../controller/authControler.js";
import "../controller/googleAuth.js";

const router = express.Router();

router.post("/customer-signup", customerSignup);
router.post("/customer-login", customerLogin);

router.post("/serviceman-signup", servicemanSignup);
router.post("/serviceman-login", servicemanLogin);

router.get("/customer-profile", auth_customer, customerProfile);
router.get("/serviceman-profile", auth_serviceman, servicemanProfile);

router.post("/customer-location-save/:longitude/:latitude", auth_customer, updateLocationCustomer);
router.post("/service-location-save/:longitude/:latitude", auth_serviceman, updateLocationService);

router.post("/add-service", auth_serviceman, addService);



export default router;
