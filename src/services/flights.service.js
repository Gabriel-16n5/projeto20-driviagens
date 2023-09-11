import {flightsRepository} from "../repositories/flights.reposity.js"

async function getFlightsOrigin(origin) {
    const result = await flightsRepository.getFlightOrigin(origin);
    return result;
}

async function getFlightOriginDestination(destination) {
    const result = await flightsRepository.getFlightOriginDestination(destination);
    return result;
}

function createFlight(origin, destination, date) {
  
    return flightsRepository.registerFlight(origin, destination, date);
}

const flightsService = {
    getFlightsOrigin,
    createFlight,
    getFlightOriginDestination
  }
  
  export default flightsService;