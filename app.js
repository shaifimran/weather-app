// const cors = require('cors'); for access from different origin
const express = require('express');
const weatherRoute = require('./routes/weather-route.js');
const app = express();

// middleware
app.use(express.json());
// app.use(cors());
app.use(express.static('./public'));

// routes
app.use('/api/v1/weather',weatherRoute);

app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:'fail',
        message: `${req.originalUrl} doesn't exist on the server`
    });
    next();
}); 

module.exports = app;
