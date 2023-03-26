import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email/password" });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      const newUser = new User({
        name: req?.body?.name,
        email: req?.body?.email,
        password: bcrypt.hashSync(req?.body?.password),
      });
      const user = await newUser.save();
      return res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
    res.status(401).send({ message: "email already registered!" });
  })
);
export default userRouter;
