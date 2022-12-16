import "dotenv/config";
import "./db.js";
import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import User from "./model/User.js";
import bcrypt from "bcrypt";
const app = express();
const PORT = process.env.PORT || 3001;

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
app.post("/join", async (req, res) => {
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
app.post("/login", async (req, res) => {
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
  res.send("Login");
});
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}!!`);
});
