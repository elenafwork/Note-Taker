const express=require('express');
const path=require('path');
const api=require('./routes/index.js')
//const fs=require('fs');
const app=express();
//const notes=require("./db/db.json");
//const { error } = require('console');
const PORT=3001;

//middleware for parsing JSON and urlcoded form data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', api);


app.use(express.static('public'));

//get route for homepage
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes.html page
app.get('/notes', (req,res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);
 


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });

