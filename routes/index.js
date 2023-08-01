const router = require('express').Router();
// Import our modular routers for note
const notesRouter = require('./notesRouter.js');


router.use('/notes', notesRouter);

module.exports = router;