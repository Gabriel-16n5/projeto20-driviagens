import {connection} from "../database/database.connection.js"

async function getPasseger(city) {
    return await connection.query(
        `
        SELECT * FROM passengers
            WHERE LOWER("firstName") LIKE '%'||$1||'%' OR LOWER("lastName") LIKE '%'||$1||'%'
        `, [city]
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