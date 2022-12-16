import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}!!`);
});
