import bcrypt from "bcrypt";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import userSchema from "../models/schemas/userSchema";
import { hash } from "../utils/hashPass";

export const Signup = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      occupation,
      socialLink,
      phone,
      refEmail,
      password,
    } = req.body;
    let user = await userSchema.find({ email: email });
    if (user.length) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: req.body.email,
            msg: "User already exists.",
            param: "email",
            location: "body",
          },
        ],
        message: "Unable to create user",
      });
    }

    const hashPassword = await hash(password, 10);
    user = new userSchema({
      firstName,
      lastName,
      email,
      phone,
      occupation,
      socialLink,
      refEmail,
      password: hashPassword,
    });
    await user.save();
    const url = `http://2factor.in/API/V1/${process.env.OTP_Api}/SMS/${phone}/AUTOGEN`;
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json({
          data: data,
          errors: [],
          message: "Signed Up successfully!!",
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const VerifyOtp = (req, res) => {
  try {
    const { session_id, otp } = req.body;
    const url = `https://2factor.in/API/V1/${process.env.OTP_Api}/SMS/VERIFY/${session_id}/${otp}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json({
          data,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: email,
            msg: "User not exist.",
            param: "email",
            location: "body",
          },
        ],
        message: "Unable to create user",
      });
    }

    const matchPassword = bcrypt.compareSync(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: password,
            msg: "Invalid password !",
            params: "password",
            location: "body",
          },
        ],
        message: "Unable to login!",
      });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
        expiresIn: "1d",
      });
      res.status(200).json({
        data: { token },
        errors: [],
        message: "Login successfully!",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const Profile = async (req, res) => {
  try {
    res.status(200).json({
      data: req.user,
      errors: [],
      message: "Fetched data form user",
    });
  } catch (err) {
    console.log(err.message);
  }
};
