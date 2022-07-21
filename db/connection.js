const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQl username
        user: 'root',
        // your MySQL pw
        password: '$Q2Gd$ye9D22dRp#',
        database: 'election'
    }
);

module.exports=db;