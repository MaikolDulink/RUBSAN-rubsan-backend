import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name es required"
    },
    lastName: {
      type: String,
      required: "LastName is required"
    },
    phone: {
      type: String,
      required: "Phone is required"
    },
    username: {
      type: String,
      required: "Username is required",
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: "Password is required"
    }
  },
  { timestamps: true }
);

export default model("user", userSchema);
