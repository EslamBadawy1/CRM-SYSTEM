const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { loginSchema } = require("../Validations/auth.validation");
const validationMiddleware = require("../middlewares/validation.middleware");

router.post("/login", validationMiddleware(loginSchema), authController.login);

module.exports = router;
