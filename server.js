'use strict';

const express = require("express");
const path = require("path");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = new express();
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);