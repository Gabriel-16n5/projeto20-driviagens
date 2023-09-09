import {connection} from "../database/database.connection.js"


async function createTravel(passengerId, flightId) {
    return connection.query(
        `
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)
        `,
        [passengerId, flightId]
    );
}

async function findPassengerId(passengerId) {
   return connection.query(
    `
    SELECT * FROM passengers WHERE id=$1`, [passengerId]);
  }

 async function findFlightId(flightId) {
   return connection.query(
    `
    SELECT * FROM flights WHERE id=$1
    `, [flightId]);
  }


export const travelsRepository = {
createTravel,
findFlightId,
findPassengerId
}