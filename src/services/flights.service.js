import {flightsRepository} from "../repositories/flights.reposity.js"

async function getFlights() {
    const result = await flightsRepository.getFlight();
    return result;
}

function createFlight(origin, destination, date) {
  
    return flightsRepository.registerFlight(origin, destination, date);
}

const flightsService = {
    getFlights,
    createFlight
  }
  
  export default flightsService;