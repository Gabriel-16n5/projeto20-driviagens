import {connection} from "../database/database.connection.js"

async function getCities(name) {
    return await connection.query(
        `
        SELECT * FROM cities 
            WHERE name = $1
        `,
        [name]
    );
}

async function createCity(name) {
    return await connection.query(
        `
        INSERT INTO cities ("name") VALUES ($1)
        `,
        [name]
    );
}

export const citiesRepository = {
    getCities,
    createCity
}