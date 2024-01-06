import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel("User", {
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    length: [8, "Password should contain at least 8 characters"],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: Array,
    required: false,
  },
});
