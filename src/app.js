import cors from 'cors';
import dotenv from 'dotenv';
import httpStatus from 'http-status';
import router from "./routes/index.routes.js"
import express, { json } from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler.js"
dotenv.config();



const app = express();

app.get("/health", (req, res) => {
  res.status(httpStatus.OK).send("up and runnig");
})

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})