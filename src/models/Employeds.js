import { Schema, model } from "mongoose";

const employedSchema = new Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  lastName: {
    type: String,
    required: "Last Name is required",
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Email is required",
  },
},
{
  timestamps: true
});

export default model("employeds", employedSchema);
