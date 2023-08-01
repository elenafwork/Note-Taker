const notes=require('express').Router();
const {readFromFile, readAndAppend}=require('../helpers/fsUtils');
const {v4:uuidv4}=require('uuid');


//GET route for all notes
notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
});

//POST route for new note
notes.post('/', (req,res) => {
    console.log(req.body);

    const {title, text}=req.body;
    if (req.body){
        const newNote={
            title,
            text,
            note_id: uuidv4()
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added!');
    } else {
        res.errored('Error !')
    }
});

module.exports=notes;