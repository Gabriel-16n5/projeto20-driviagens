import {connection} from "../database/database.connection.js"

async function getPasseger(city) {
    const result = await connection.query(
        `
        SELECT * FROM passengers
            WHERE LOWER("firstName") LIKE '%'||$1||'%' OR LOWER("lastName") LIKE '%'||$1||'%'
        `, [city]
    );
    const a = 1
    const travels = await connection.query(
        `
        SELECT * FROM travels
            WHERE "passengerId" = $1

        `, [result.rows[0].id]
    );
        const sapo = {
            passenger: result.rows[0].firstName + " " + result.rows[0].lastName,
            travels: travels.rows.length
        }
        return sapo
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
    createPassenger,
}