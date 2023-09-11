import {connection} from "../database/database.connection.js"
import { notFoundError } from "../errors/notFound.error.js";

async function getFlightOrigin(origin) {
    const originId = await connection.query(
        `
        SELECT * FROM cities
            WHERE name = $1
        `,
        [origin]
    );
    if(originId.rowCount === 0) throw notFoundError("cidade")
    const flights = await connection.query(
        `
        SELECT * FROM flights
            WHERE origin = $1
        `,
        [originId.rows[0].id]
    );

    // switch(flights.rows[0].destination){
    //     case 5:
    //         const data = {
    //             id: flights.rows[0].id,
    //             origin: originId.rows[0].name,
    //             destination: "Curitiba",
    //             date: flights.rows[0].date
    //         }
    //         return data
    //         break;
    // }
   
    // const data = {
    //     id: flights.rows[0].id,
    //     origin: originId.rows[0].name,
    //     destination: originId.rows[0].name,
    //     date: flights.rows[0].date
    // }
    // return data
    return flights.rows
    }
async function getFlightOriginDestination(destination) {
    const destinationId = await connection.query(
        `
        SELECT * FROM cities
            WHERE name = $1
        `,
        [destination]
    );
    if(destinationId.rowCount === 0) throw notFoundError("cidade")
    const flights = await connection.query(
        `
        SELECT * FROM flights
            WHERE destination = $1
        `,
        [destinationId.rows[0].id]
    );
    return flights.rows
}
async function verifyDestination(destination) {
    const destinationExists = await connection.query(
        `
        SELECT * FROM cities
            WHERE id = $1
        `,
        [destination]
    );
    return destinationExists
}

async function verifyOrigin(origin) {
    const originExists = await connection.query(
        `
        SELECT * FROM cities
            WHERE id = $1
        `,
        [origin]
    );
    return originExists
}

async function registerFlight(origin, destination, date) {

    const flight = await connection.query(
        `
        INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3)
        `,
        [origin, destination, date]
    );

    return flight
}

export const flightsRepository = {
    getFlightOrigin,
    registerFlight,
    getFlightOriginDestination,
    verifyDestination,
    verifyOrigin
}