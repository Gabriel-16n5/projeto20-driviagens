import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
export const connection = new Pool({
  connectionString: process.env.DATABASE_URL
});

if (process.env.MODE === "prod") configDataBase.ssl = true;
console.log("conexão com banco estabelecida");