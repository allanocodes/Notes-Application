const express = require('express');

const app = express();

app.use(express.json());
const notesroute = require('./src/router/notesRoute')

app.use("/api",notesroute);

module.exports = app;