const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any other request (Not Found)
//will override all other GET routes, cuz it is a catch-all, so make sure it is THE LAST ONE
app.use((req,res)=> {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});