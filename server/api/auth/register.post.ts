import { User } from "@/server/models/User";

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password || !body.firstName || !body.lastName) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({
    email: body.email,
    password: hashedPassword,
    first_name: body.firstName,
    last_name: body.lastName,
  });

  return { ...user.toObject(), password: undefined };
});
