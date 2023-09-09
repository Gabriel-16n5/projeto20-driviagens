import { Router } from "express";
import travelController from "../controllers/travelsController.js";

const travelRouter = Router()

travelRouter.post("/travels", travelController.createTravel);

export default travelRouter;