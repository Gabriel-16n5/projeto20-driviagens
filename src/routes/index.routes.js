import { Router } from "express";
import passengerRouter from "./passengers.routes.js";

const router = Router();
router.use(passengerRouter);

export default router