import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("BookStore API is running 🚀");
});

app.use("/book", bookRoute);
app.use("/user", userRoute);
// // defining routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
