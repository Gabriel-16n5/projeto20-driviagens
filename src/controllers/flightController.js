import httpStatus from "http-status";
import flightService from "../services/flights.service.js"

async function getFlight(req, res) {
    const flights = await flightService.getFlights();
    res.send(flights.rows);
}

async function createFlight(req, res) {
    const { body } = req;
    const { origin, destination, date } = body;
    if (!origin && !destination && !date) throw incompleteDataError();
    flightService.createFlight(origin, destination, date)
    res.sendStatus(httpStatus.CREATED);
}

const flightController = {
    getFlight,
    createFlight
}
  
  export default flightController;