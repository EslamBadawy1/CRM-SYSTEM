const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required(),

  email: Joi.string().email().required(),

  phone: Joi.string().allow("").optional(),

  password: Joi.string().min(6).required(),

  role: Joi.string()
    .valid("superadmin", "admin", "agent")
    .required(),

  status: Joi.string()
    .valid("active", "inactive")
    .optional(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50),

  email: Joi.string().email(),

  phone: Joi.string().allow(""),

  password: Joi.string().min(6),

  role: Joi.string().valid(
    "superadmin",
    "admin",
    "agent"
  ),

  status: Joi.string().valid(
    "active",
    "inactive"
  ),
}).min(1);

module.exports = {
  createUserSchema,
  updateUserSchema,
};