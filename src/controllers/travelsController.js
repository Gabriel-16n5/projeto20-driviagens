import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";
import {notFoundError} from "../errors/notFound.error.js"
import {incompleteDataError} from "../errors/incompleteData.error.js"

async function createTravel(req, res) {
    const { body } = req;
    const { passengerId, flightId } = body;
    if (!passengerId || !flightId) throw incompleteDataError();
    await travelsService.createTravel(passengerId, flightId)
    res.sendStatus(httpStatus.CREATED);
}

const travelController = {
    createTravel
}
  
  export default travelController;