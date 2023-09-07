import { passegersRepository } from "../repositories/passegers.repository.js";

function getPasseger(firstName, lastName) {
    const result = passegersRepository.getPasseger(firstName, lastName);
    return result;
}

function createPassenger(firstName, lastName) {
    // const existingPasseger = passegersRepository.getPasseger(firstName, lastName);
    // if (existingPasseger) throw conflictError();
  
    return passegersRepository.createPassenger(firstName, lastName);
}

const passegersService = {
    getPasseger,
    createPassenger
  }
  
  export default passegersService;