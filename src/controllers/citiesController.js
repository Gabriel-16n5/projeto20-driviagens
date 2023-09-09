import httpStatus from "http-status";
import citiesService from "../services/cities.service.js";
import {incompleteDataError} from "../errors/incompleteData.error.js"

function createCity(req, res) {
    const { body } = req;
    const { name } = body;
    if (!name) throw incompleteDataError();
    citiesService.createCity(name)
    res.sendStatus(httpStatus.CREATED);
}

const citiesController = {
    createCity
}
  
  export default citiesController;