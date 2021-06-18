import express from "express";
import auth from "../middlewares/auth";
import { Signup, Login, Profile, VerifyOtp, googlelogin } from "../controller/authControler";
import {
  validateSignup,
  isRequestValidate,
  validateLogin,
} from "../utils/sanitizeAndValidate";

const router = express.Router();

router.post("/signup", validateSignup, isRequestValidate, Signup);

router.post("/verify", VerifyOtp);

router.post("/login", validateLogin, isRequestValidate, Login);

router.post("/googlelogin", googlelogin);

router.get("/profile", auth, Profile);



export default router;
