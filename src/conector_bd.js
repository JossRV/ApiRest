import { createPool } from "mysql2/promise";
import { DB_CHARSET, DB_HOST, DB_NAME, DB_PASSWD, DB_PORT, DB_USER } from "./config.js";

export const conexion = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWD,
    port: DB_PORT,
    database: DB_NAME
});