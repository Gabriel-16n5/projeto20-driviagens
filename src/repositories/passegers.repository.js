import {connection} from "../database/database.connection.js"
import { notFoundError } from "../errors/notFound.error.js";

async function getPasseger(passengerName) {
    const result = await connection.query(
        `
        SELECT * FROM passengers
            WHERE LOWER("firstName") LIKE '%'||$1||'%' OR LOWER("lastName") LIKE '%'||$1||'%'
        `, [passengerName]
    );
    if(result.rowCount === 0) throw notFoundError("Nome do passageiro");
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
    console.log("entrou para criar")
     const createPassenger = await connection.query(
        `
        INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
        `,
        [firstName, lastName]
    );
        console.log("criou")
    return createPassenger;
}

export const passegersRepository = {
    getPasseger,
    createPassenger,
}