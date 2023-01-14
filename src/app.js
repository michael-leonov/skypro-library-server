import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import router from "./routes";
import mongoose from "mongoose";
import ErorrHandlingMiddleware from "./middlewares/ErorrHandlingMiddleware";
import loggerURL from "./middlewares/loggerURL";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(json());
app.use(loggerURL);
app.use("/api", router);

app.use(ErorrHandlingMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server start on ${PORT}`));
  } catch (error) {
    console.log("connnection error", error);
  }
};

start();
