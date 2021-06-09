import { check, validationResult } from "express-validator";

export const validateSignup = [
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("First name cannot be empty")
    .isLength({ max: 15 })
    .withMessage("Max length is 15 characters.")
    .isAlphanumeric()
    .withMessage("Cannot contain special characters or numbers"),

  check("lastName")
    .not()
    .isEmpty()
    .withMessage("Last name cannot be empty")
    .isLength({ max: 15 })
    .withMessage("Max length is 15 characters.")
    .isAlphanumeric()
    .withMessage("Cannot contain special characters or numbers"),

  check("email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("phone").not().isEmpty().withMessage("Phone cannot be empty"),

  check("occupation").not().isEmpty().withMessage("Choose your occupation"),

  check("socialLink").not().isEmpty().withMessage("Social link is required"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    ),
];

export const validateLogin = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage(
      "Password must be 8<length, must contain 1 symbol, 1 uppercase, 1 lowercase and 1 number"
    ),
];

export const isRequestValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
