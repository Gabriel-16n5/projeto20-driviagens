import { Router } from "express";
import {validateSchema} from "../middlewares/validateSchemas.middleware.js"
import { flightSchema } from "../schemas/flights.schemas.js"
import flightController from "../controllers/flightController.js"

const flightRouter = Router()

flightRouter.post("/flights", validateSchema(flightSchema), flightController.createFlight);
flightRouter.get("/flights", flightController.getFlight);

export default flightRouter;