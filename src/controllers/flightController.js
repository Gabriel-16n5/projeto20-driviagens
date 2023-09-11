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
        const origin = originString.toLowerCase();
        const flights = await flightService.getFlightsOrigin(origin);
        res.send(flights);
    }
    if(req.query.destination){
        const destinationtring = req.query.destination;
        const destination = destinationtring.toLowerCase();
        const flights = await flightService.getFlightOriginDestination(destination);
        res.send(flights);
    }
    // const originString = req.query.origin;
    // const destinationString = req.query.destination;
    // const origin = originString.toLowerCase();
    // const flights = await flightService.getFlights(originString);
    // res.send(flights.rows);
    res.sendStatus(httpStatus.NOT_FOUND)
}

async function createFlight(req, res) {
    const { body } = req;
    const { origin, destination, date } = body;
    if (!origin || !destination || !date) throw incompleteDataError();
    const dateNow = dayjs().format("DD-MM-YYYY")
    if (compareDates(date, dateNow)) throw unprocessableEntityError("A data do voo deve ser maior do que a data atual")
    if (origin === destination) throw conflictError("origem e destino iguais")
    const existDestination = await flightService.verifyDestination(destination)
    if(existDestination.rowCount === 0) throw notFoundError("Destino");
    const existOrigin = await flightService.verifyOrigin(origin)
    if(existOrigin.rowCount === 0) throw notFoundError("Origin");
    const done = await flightService.createFlight(origin, destination, date)
    if(done) res.sendStatus(httpStatus.CREATED);
    else throw incompleteDataError()
    
}

const flightController = {
    getFlight,
    createFlight
}
  
  export default flightController;