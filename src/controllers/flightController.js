import httpStatus from "http-status";
import flightService from "../services/flights.service.js"
import { incompleteDataError } from "../errors/incompleteData.error.js"
import {conflictError} from "../errors/conflict.error.js"
import dayjs from "dayjs";
import compareDates from "../utils/dateCompare.js";
import { unprocessableEntityError } from "../errors/unprocessableEntity.error.js";

async function getFlight(req, res) {
    if(req.query.origin){
        const originString = req.query.origin;
        const flights = await flightService.getFlightsOrigin(originString);
        res.send(flights);
    }
    if(req.query.destination){
        const destinationtring = req.query.destination;
        const flights = await flightService.getFlightOriginDestination(destinationtring);
        res.send(flights);
    }
    // const originString = req.query.origin;
    // const destinationString = req.query.destination;
    // const origin = originString.toLowerCase();
    // const flights = await flightService.getFlights(originString);
    // res.send(flights.rows);
}

async function createFlight(req, res) {
    const { body } = req;
    const { origin, destination, date } = body;
    if (!origin || !destination || !date) throw incompleteDataError();
    const dateNow = dayjs().format("DD-MM-YYYY")
    if (compareDates(date, dateNow)) throw unprocessableEntityError("A data do voo deve ser maior do que a data atual")
    if (origin === destination) throw conflictError("origem e destino iguais")
    flightService.createFlight(origin, destination, date)
    res.sendStatus(httpStatus.CREATED);
}

const flightController = {
    getFlight,
    createFlight
}
  
  export default flightController;