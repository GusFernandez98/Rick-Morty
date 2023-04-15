 const express = require('express');
 const server = express();  
 const routes = require('./routes/index');
 const morgan = require('morgan')
 const cors = require('cors');

 //middleware
 server.use(express.json());
 server.use(morgan('dev'));      
 server.use(cors());   //Reemplazo toda la config del res.header.
 server.use('/rickandmorty', routes);


 server.get("/",(req,res)=>{
     res.status(200).json({message: "ONLINE"})
 })

module.exports = server