const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use( cors() );

app.get("/", (req, res)=>{
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log("server is running!");
});
