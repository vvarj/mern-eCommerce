import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`serve at port http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
