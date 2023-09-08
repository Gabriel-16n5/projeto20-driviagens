import { Router } from "express";
import {validateSchema} from "../middlewares/validateSchemas.middleware.js"
import { passengerSchema } from "../schemas/passegers.schemas.js";
import passengerController from "../controllers/passengerController.js";

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.passengerData);
passengerRouter.get("/passengers/travels", passengerController.getPassengerTravel);

export default passengerRouter;