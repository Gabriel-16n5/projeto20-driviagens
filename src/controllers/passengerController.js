import httpStatus from "http-status";
import passegersService from "../services/passenger.service.js";

async function getPassengerTravel(req, res) {
    const passenger = await passegersService.getPasseger();
    res.send(passenger.rows);
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