import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import customerSchema from "../models/schemas/customerLogin.js";
import servicemanSchema from "../models/schemas/servicemanLogin.js";
import { hash } from "../utils/hashPass.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.CLIENT_ID);

export const customerSignup = async (req, res) => {
    try {
        const { email, name, phone, password } = req.body;
        let user = await customerSchema.find({ email: email });

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
        user = new customerSchema({
            name,
            email,
            phone,
            password: hashPassword,
        });
        await user.save();
    } catch (error) {
        console.log(error.message);
    }
};

export const customerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await customerSchema.findOne({ email: email });
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
            //setting cookie
            res.cookie("customerToken", token);
            console.log("Token set inside cookie.");
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

export const customerProfile = async (req, res) => {
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

export const servicemanSignup = async (req, res) => {
  try {
      const { email, name, phone, password } = req.body;
      let user = await servicemanSchema.find({ email: email });

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
      user = new servicemanSchema({
          name,
          email,
          phone,
          password: hashPassword,
      });
      await user.save();
  } catch (error) {
      console.log(error.message);
  }
};

export const servicemanLogin = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await servicemanSchema.findOne({ email: email });
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
          //setting cookie
          res.cookie("servicemanToken", servicemanToken);
          console.log("Token set inside cookie.");
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

export const servicemanProfile = async (req, res) => {
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


export const googlelogin = (req, res) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: process.env.CLIENT_ID }).then((resp) => {
        const { email_verified, name, email } = resp.payload;
        if (email_verified) {
            userSchema.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong...",
                    });
                } else {
                    if (user) {
                        const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
                            expiresIn: "1d",
                        });
                        const { _id, name, email } = user;

                        res.status(200).json({
                            data: { token, _id, name, email },
                            errors: [],
                            message: "Login successfully!",
                        });
                    } else {
                        let password = email + process.env.jwt_secret;
                        let newUser = new userSchema({ name, email, password });
                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong...",
                                });
                            }
                            const token = jwt.sign({ id: data._id }, process.env.jwt_secret, {
                                expiresIn: "1d",
                            });
                            const { _id, name, email } = newUser;

                            res.status(200).json({
                                data: { token, _id, name, email },
                                errors: [],
                                message: "Login successfully!",
                            });
                        });
                    }
                }
            });
        }
    });
    console.log(tokenId);
};
