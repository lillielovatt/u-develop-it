const mysql = require('mysql2');
const express = require("express");
const { isBuffer } = require('util');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQl username
        user: 'root',
        // your MySQL pw
        password: '$Q2Gd$ye9D22dRp#',
        database: 'election'
    },
    console.log("Connected to the election database.")
);

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id= ?`, 1, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id,first_name,last_name,industry_connected)
//     VALUES (?,?,?,?)`;
// const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })


// default response for any other request (Not Found)
//will override all other GET routes, cuz it is a catch-all, so make sure it is THE LAST ONE
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});