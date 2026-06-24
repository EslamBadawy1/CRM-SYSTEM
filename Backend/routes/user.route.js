const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const verifyToken = require("../middlewares/verifyToken.middleware");

const validationMiddleware = require("../middlewares/validation.middleware");

const {
  createUserSchema,
  updateUserSchema,
} = require("../validations/user.validation");

// Protect All Routes
router.use(verifyToken);

// Get All Users
router.get("/", getUsers);

// Get User By Id
router.get("/:id", getUserById);

// Create User
router.post("/", validationMiddleware(createUserSchema), createUser);

// Update User
router.put("/:id", validationMiddleware(updateUserSchema), updateUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;
