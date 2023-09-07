import httpStatus from "http-status";
import passegersService from "../services/passenger.service.js";

async function getPassengerTravel(req, res) {
    const { body } = req;
    const { firstName, lastName } = body;
    const passenger = passegersService.getPasseger(firstName, lastName);
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