const express = require('express'); //old import method to import the Express module into the app and store it into express var.
const mongoose = require('mongoose') //import in the old node js require format 
const productRoute = require('./routes/product.route.js')

const app = express(); //create an application object of the var where the module was imported to set up the server
const port = 3000; //define port to handle requests

//middleware
app.use(express.json())//middleware to automatically parse JSON payloads from requests into js objects to use in the rest of the serverside logic.
app.use(express.urlencoded()) //parses url encoded payloads into js objects to use in the rest of the serverside logic. 

//routes
app.use("/api/products", productRoute)

mongoose.connect('mongodb+srv://enzoaltamirano98:D20k2jTpWpuIhpsF@backenddb.5g9fwwm.mongodb.net/CRUD-NODE-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() =>{
    console.log('Connected to CRUD-NODE-API MongoDB database!')
    // Start the server
    app.listen(port, () => { //starts the server and listens for incoming requests on the defined port.
        console.log(`Server is running at http://localhost:${port}`); //callback executed once the server starts successfully
    });
    })
    .catch(() =>{
    console.log("Connection failed")
    });



