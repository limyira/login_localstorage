import "dotenv/config";
import "./db.js";
import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import User from "./model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import auth from "./middleware/auth.js";
const app = express();
const PORT = process.env.PORT || 3001;

const { sign, verify } = jwt;
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("home");
});
app.use(
  session({
    secret: process.env.MONGO_SECRET,
    resave: false,
    saveUninitialized: true,
    stroe: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);
app.post("/api/users/join", async (req, res) => {
  const { user } = req.body;
  console.log(user);
  try {
    const newUser = await User.create({
      email: user.email,
      name: user.name,
      password: user.password,
    });
    console.log(newUser);
    res.status(200).json("join success");
  } catch (err) {
    res.status(500).json({ err });
  }
});
app.post("/api/users/login", async (req, res) => {
  const {
    user: { email, password },
  } = req.body;
  const userInfo = await User.findOne({ email });
  if (!userInfo) {
    res.status(404).json("User does not exists");
  }
  const ok = await bcrypt.compare(password, userInfo.password);
  if (!ok) {
    res.status(500).json("Password does not matches");
  }
  console.log(ok);
  const access_token = sign(
    userInfo._id.toHexString(),
    process.env.ACCESS_SCRET
  );
  console.log(access_token);
  res
    .cookie("access", access_token)
    .status(200)
    .json({ loginSuccess: true, userID: userInfo.email });
});

app.get("/api/users/auth", auth, (req, res) => {});
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}!!`);
});
