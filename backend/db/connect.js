import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose
    .connect(url, {}, mongoose.set("strictQuery", false))
    .then(() => {
      console.log("Connected to db");
    })
    .catch((e) => {
      console.log("DB ERROR:", e);
    });
};

export default connectDB;
