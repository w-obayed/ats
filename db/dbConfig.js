import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected!");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
