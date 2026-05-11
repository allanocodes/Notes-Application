
const express = require("express");

const route = express.Router();
const notesController = require('../controller/notesController');

route.get("/notes/all",notesController.getNotes);
route.post("/notes/add",notesController.createNotes);
route.get("/notes/:id",notesController.getNotes)

module.exports = route;

