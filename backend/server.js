import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  });
});

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
