import { travelsRepository } from "../repositories/travels.repository.js";
import {notFoundError} from "../errors/notFound.error.js"

async function createTravel(passengerId, flightId) {
    const existingTravelFlightId = await travelsRepository.findFlightId(flightId)
    if (existingTravelFlightId.rowCount === 0) throw notFoundError("voo");
    const existingTravelpassengertId = await travelsRepository.findPassengerId(passengerId)
    if (existingTravelpassengertId.rowCount === 0) throw notFoundError("passageiro");
    return travelsRepository.createTravel(passengerId, flightId);
}

const travelsService = {
    createTravel
  }
  
  export default travelsService;