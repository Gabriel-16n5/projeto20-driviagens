import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import flightRouter from "./flights.routes.js";
import citiesRouter from "./cities.routes.js";
import travelRouter from "./travels.routes.js";

const router = Router();
router.use(passengerRouter);
router.use(flightRouter);
router.use(citiesRouter);
router.use(travelRouter);
export default router