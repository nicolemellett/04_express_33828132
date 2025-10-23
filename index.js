// Set up and imoport express
// create an instance
// define port number
const express = require("express");
const app = express();
const port = 8000; 


// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);


// Start express sever and listening for HTTP requests on port given above
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));
