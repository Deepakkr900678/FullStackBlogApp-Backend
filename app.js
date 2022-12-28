import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
const PORT = 3600;
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://deepakkumar:deepakkumar123@cluster0.esejbht.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Server is up at", PORT)
  )
  .catch((err) => console.log(err));
