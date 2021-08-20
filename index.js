// I have done everything here in Express JS framework
// import some modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');//mongoose is for using MongoDB
//Inserting MongoDB Model 
const model = require('./ex.js')
const model2 = require('./ex2.js')


//Connecting with the database 
mongoose.connect('mongodb://localhost:27017/newdb2',{useNewUrlParser: true, useUnifiedTopology:true});

//setting the port 
const port = 3000;

//Serving all other HTML,CSS,JS files
app.use(express.static('public'));

app.set('view engine','ejs');

//Creating Server and setting it
app.get('/', (req, res) => {
    res.send("index")//running index.html as start file
})

app.get('/forum', async(req,res)=>{
    var readata = await model.find();
    
    //console.log(readata);
    res.render("forum", {n: readata})
})
//inserting the form data in Mongo DB
app.get('/handlefform1',async(req, res) => {
    var data = JSON.parse(JSON.stringify(req.query));//converting the data to JSON
    const response = await model.create(data);//Adding the data
    console.log(response);//console log to verify
    res.redirect("/forum")//redirecting to forum page after successful data insertion
  
})
app.get('/answer', async(req,res)=>{
    var ansdata = req.query.id
    console.log(ansdata)
    var readata2 = await model.find({_id : ansdata})
    var readataa = await model2.find({id: ansdata})
    res.render("answe",{idd: readata2, x: readataa})
})
app.get('/handlefform2',async(req, res) => {
    var dataa = JSON.parse(JSON.stringify(req.query));//converting the data to JSON
    const response = await model2.create(dataa);//Adding the data
    console.log(response);//console log to verify
    res.redirect(`/answer?id=${dataa.id}`);
})

//Setting the port in Express JS
//Printing the link where the website can be seen 
app.listen(port, () => {
    console.log(`Website is running at http://localhost:${port}`)
})