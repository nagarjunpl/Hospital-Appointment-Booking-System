/**
 * Admin Seeder Script
 * -------------------
 * Creates a default admin user if it does not already exist.
 * Run using: node seeder.js
 */

const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./model/user");

dotenv.config();

const seedAdmin = async () => {
  try {
    // 1️⃣ Validate env variables
    if (
      !process.env.DB_URL ||
      !process.env.USER_NAME ||
      !process.env.EMAIL ||
      !process.env.PASSWORD
    ) {
      throw new Error("Missing required environment variables");
    }

    // 2️⃣ Connect to MongoDB
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");

    const email = process.env.EMAIL;

    // 3️⃣ Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists, skipping seed");
      return;
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcryptjs.hash(process.env.PASSWORD, 8);

    // 5️⃣ Create admin user
    const adminUser = await User.create({
      username: process.env.USER_NAME,
      email: email,
      password: hashedPassword,
      is_admin: true,
    });

    console.log("✅ Admin created successfully:");
    console.log({
      username: adminUser.username,
      email: adminUser.email,
      is_admin: adminUser.is_admin,
    });

  } catch (error) {
    console.error("❌ Seeder failed:", error.message);
  } finally {
    // 6️⃣ Disconnect DB
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
    process.exit();
  }
};

// Run seeder
seedAdmin();
