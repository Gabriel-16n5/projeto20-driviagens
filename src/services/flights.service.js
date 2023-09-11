import {flightsRepository} from "../repositories/flights.reposity.js"

async function getFlightsOrigin(origin) {
    const result = await flightsRepository.getFlightOrigin(origin);
    return result;
}

async function verifyOrigin(origin) {
    const result = await flightsRepository.verifyOrigin(origin)
    return result;
}

async function getFlightOriginDestination(destination) {
    const result = await flightsRepository.getFlightOriginDestination(destination);
    return result;
}

async function verifyDestination(destination) {
    const result = await flightsRepository.verifyDestination(destination)
    return result;
}

function createFlight(origin, destination, date) {
  
    return flightsRepository.registerFlight(origin, destination, date);
}

const flightsService = {
    getFlightsOrigin,
    createFlight,
    getFlightOriginDestination,
    verifyDestination,
    verifyOrigin
  }
  
  export default flightsService;