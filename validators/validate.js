const z = require("zod");

const LoginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "email is invalid" }),
  password: z
    .string({ required_error: "password  is required" })
    .trim()
    .min(6, { message: "password must be at least 6 character" }),
});

const RegisterSchema = LoginSchema.extend({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 character " })
    .max(255, { message: "name must be 255 character" }),
  phone: z
    .string({ required_error: "mobile number is required" })
    .trim()
    .min(10, { message: "mobile number at least 10 character" })
    .max(10, { message: "mobile number at least 10 character" }),
});

module.exports = { RegisterSchema, LoginSchema };
