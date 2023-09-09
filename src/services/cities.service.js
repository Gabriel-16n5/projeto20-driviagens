import { citiesRepository } from "../repositories/cities.repository.js";
import { conflictError } from "../errors/conflict.error.js"

async function createCity(name) {
    const existingCitie = await citiesRepository.getCities(name);
    if (existingCitie) throw conflictError("cidade");
    return citiesRepository.createCity(name)
}

const citiesService = {
    createCity
  }
  
  export default citiesService;