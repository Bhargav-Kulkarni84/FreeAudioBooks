const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
// app.set('views',path.join(__dirname,"FreeAudioBooks"));
// app.set('views', path.join(__dirname, 'views'))
app.set('views',path.join(__dirname));
app.get('/home',(req,res)=>{
        res.render("home.ejs");
})

app.listen(3000,()=>{
    console.log("CONNECTED TO THE SERVER");
})
