import httpStatus from "http-status";
import passegersService from "../services/passenger.service.js";
import { notFoundError } from "../errors/notFound.error.js";

async function getPassengerTravel(req, res) {
    const passengerString = req.query.name;
    if(!passengerString) throw notFoundError("Nome do passageiro");
    const passengerName = passengerString.toLowerCase();
    const passenger = await passegersService.getPasseger(passengerName);
    res.send(passenger);
  }

async function passengerData(req, res) {
    const { body } = req;
    const { firstName, lastName } = body;
    if (!firstName || !lastName) throw incompleteDataError();
    passegersService.createPassenger(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

const passengerController = {
    getPassengerTravel,
    passengerData
}
  
  export default passengerController;