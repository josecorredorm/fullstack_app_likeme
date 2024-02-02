const {Pool} = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    allowExitOnIdle: true
})

// const getData = async () => {
//     const rest= await pool.query("Select Now()");
//     console.log(rest.rows);
//   };
//  getData();

module.exports = pool