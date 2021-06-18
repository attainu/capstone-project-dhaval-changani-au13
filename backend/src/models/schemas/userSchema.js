import mongoose from "mongoose";

const UserSchems = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    occupation: {
      type: String,
      // required: true,
      trim: true,
    },
    socialLink: {
      type: String,
      // required: true,
      trim: true,
    },
    refEmail: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchems);
