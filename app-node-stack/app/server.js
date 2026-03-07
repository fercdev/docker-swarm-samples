const express = require("express");
const fs = require("node:fs");

const app = express();
const PORT = 7000;


// para leer mi archivo config del container
const config = JSON.parse(
    fs.readFileSync("/run/configs/app_config.json")
);

// para leer mi secret
const apiKey = fs.readFileSync("/run/secrets/api_key")
    .toString()
    .trim();

app.get("/", (req, res) => {
    res.json({
        service: config.serviceName,
        version: config.version
    })
});

app.get("/users", (req, res) => {
    if (req.headers["x-api-key"] !== apiKey) {
        return res.status(401).json({
            error: "No autorizado"
        });
    }

    res.json([
        {id: 1, name: "Fernando"},
        {id: 2, name: "Pedro"},
        {id: 3, name: "David"},
    ]);
});

app.listen(PORT, () => {
    console.log("Api ejecutandose correctamente...");
});

