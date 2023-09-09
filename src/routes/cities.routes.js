import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemas.middleware.js";
import {citySchema} from "../schemas/cities.schemas.js"
import citiesController from "../controllers/citiesController.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citySchema), citiesController.createCity);

export default citiesRouter;