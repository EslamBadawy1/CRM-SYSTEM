require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User.model"); 

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    // check if superadmin exists
    const existAdmin = await User.findOne({
      email: process.env.EMAIL_ADMIN,
    });

    if (existAdmin) {
      console.log("Super Admin already exists");
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(
      process.env.PASSWORD_ADMIN,
      10
    );

    // create super admin
    const admin = await User.create({
      name: "Super Admin",
      email: process.env.EMAIL_ADMIN,
      password: hashedPassword,
      role: "superadmin",
    });

    console.log("Super Admin Created:", admin.email);

  } catch (error) {
    console.log("Seed Error:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("DB Closed");
    process.exit(0);
  }
};

seedSuperAdmin();