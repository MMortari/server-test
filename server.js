const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello from test server"));
app.get("/names", (req, res) => res.json(["Antonio", "Rodrigo", "Josué"]));

app.listen(3331, () => console.log("Server running on port 3331"));
