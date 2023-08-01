const express = require('express');
// Import our modular routers for note
const notesRouter = require('./notesRouter.js');

const app=express();
app.use('/notes', notesRouter);

module.express=app;