import mongoose from "mongoose";

// Modern connection options to help debug
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Fail fast (5s)
    });
    console.log("MongoDB Connected... ✅");
  } catch (err) {
    console.error("Critical: Could not connect to MongoDB Atlas!");
    process.exit(1); // Stop the server if DB fails
  }
};

export default connectDB;