import mysql from "mysql2";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '1234',
  port : '3306',
  database : 'ohouse'
})

export const db = pool.promise()