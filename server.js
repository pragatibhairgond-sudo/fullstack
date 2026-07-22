// Set Up Express Application
const express = require('express');
const app = express();

// home route
app.get('/', (req, res) => {
    res.send('Hello World');})

// Start Server
app.listen(3000, () => { 
    console.log('Sever is running on https://localhost:3000');});
