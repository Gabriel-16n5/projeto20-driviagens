import {connection} from "../database/database.connection.js"

async function getFlightOrigin(origin) {
    const originId = await connection.query(
        `
        SELECT * FROM cities
            WHERE name = $1
        `,
        [origin]
    );
    // console.log(originId.rows[0])
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
    const flights = await connection.query(
        `
        SELECT * FROM flights
            WHERE destination = $1
        `,
        [destinationId.rows[0].id]
    );
    return flights.rows
}

async function registerFlight(origin, destination, date) {
    return connection.query(
        `
        INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3)
        `,
        [origin, destination, date]
    );
}

export const flightsRepository = {
    getFlightOrigin,
    registerFlight,
    getFlightOriginDestination
}