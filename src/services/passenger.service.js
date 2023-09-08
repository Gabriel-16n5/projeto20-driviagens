import { passegersRepository } from "../repositories/passegers.repository.js";

async function getPasseger() {
    const result = await passegersRepository.getPasseger();
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