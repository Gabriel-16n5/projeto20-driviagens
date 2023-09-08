import joi from "joi"
import JoiDateFactory from "@joi/date";
const Joi = joi.extend(JoiDateFactory);

export const flightSchema = joi.object({
	origin: joi.number().min(1).max(5),
	destination: joi.number().min(1).max(5),
    date: Joi.date().format(['DD-MM-YYYY'])
});