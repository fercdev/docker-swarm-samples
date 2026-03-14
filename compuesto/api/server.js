const http = require("node:http")

const PORT = 6000;

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({status: "ok"}));
        return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo desde mi cluster de swarm!..");
});

server.listen(PORT, () => {
    console.log('Server ejecutandose .....')
})