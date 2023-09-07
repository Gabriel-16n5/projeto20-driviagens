import {connection} from "../database/database.connection.js"
async function getPasseger(firstName, lastName) {
    return connection.query(
        `
        SELECT * FROM passengers WHERE "firstName" = $1 AND "lastName" = $2
        `,
        [firstName, lastName]
    );
}

async function createPassenger(firstName, lastName) {
    return connection.query(
        `
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
        `,
        [firstName, lastName]
    );
}

export const passegersRepository = {
    getPasseger,
    createPassenger
}