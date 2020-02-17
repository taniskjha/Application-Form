const express = require("express");
// const config = require("config");
const bodyParser = require("body-parser")
const fs = require("fs");
const axios = require("axios")
const app = express();


// requesting body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("views"))

// starting port
const port = 2300;

// recieving post request

app.post("/register", (req,res) => {
    // console.log(req.body)
    // res.send('store.text')
    fs.writeFile('store.txt',
    `Name: ${req.body.text}
    Email: ${req.body.email}
    Password: ${req.body.password}
    Address: ${req.body.address}
    Radio: ${req.body.radio}`  
    
    , (err) => {
        if (err) {
            throw err
        } else {
            console.log('file pushed')
            res.redirect('/success')
        }
    })


    
})


// displaying data

app.get("/success", (req,res) => {
    fs.readFile("store.txt","utf8", (err,data) => {
        if(err) {
            throw err
        } else {
            console.log(data)
            res.send(data)
            
        }
    })
})





//creating server
app.listen(port, () => {
    console.log(`server is started at ${port}`)
})