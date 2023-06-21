const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const PORT=3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
//app.use('/api', api);

//get route for homepage
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname, './Develop/public/index.html'))
);

//GET route for note page
app.get('/notes', (req,res) => 
res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
);






app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });

