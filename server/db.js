const Pool =require('pg').Pool;

const pool = new Pool({
    user:"Postgres",
    password:"Devansh123",
    host:"localhost",
    port:5432,
    database:"perntodo"
});