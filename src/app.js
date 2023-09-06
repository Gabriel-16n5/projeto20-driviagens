import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import httpStatus from 'http-status';
dotenv.config();


const app = express();
app.use(cors());
app.use(json());

app.get("/health", (req, res) => {
    res.status(httpStatus.OK).send("up and runnig");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})