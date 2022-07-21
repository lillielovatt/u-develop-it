
const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes"); //automatically assumes you're looking for an 'index.js' if not specified

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api", apiRoutes); //adds the /api before every route that's now in the apiRoutes folder

// default response for any other request (Not Found)
//will override all other GET routes, cuz it is a catch-all, so make sure it is THE LAST ONE
app.use((req, res) => {
    res.status(404).end();
});


// why this??
db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
