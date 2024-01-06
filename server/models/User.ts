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
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    key: { type: String, default: "user" },
    authority: { type: Number, default: 0 },
  },
});
