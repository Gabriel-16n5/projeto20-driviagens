import {connection} from "../database/database.connection.js"

async function getFlight() {
    return await connection.query(
        `
        SELECT * FROM flights
        `
    );
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
    getFlight,
    registerFlight
}