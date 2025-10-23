// Create a new router
const express = require("express");
const router = express.Router();
const path = require("path"); 

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send ('<h1>Contact</h1>'))

router.get('/date', (req, res) => {
  res.set('Content-Type', 'text/html'); 
  res.send(`<h1>Today's Date - ${new Date()}</h1>`);
  });

router.get('/welcome/:name', (req, res) => {
  const userName = req.params.name; // get the name from the URL
  res.send(`<h1>Welcome ${userName}</h1>`); // display it on the page
});

// Example of using next() to chain route handlers

// First handler — logs and passes control
router.get('/chain', (req, res, next) => {
  console.log("First route handler executed");
  res.set('Content-Type', 'text/html');
  res.write("<h1>This is the start of the chain !</h1>");
  next(); // passes control to the next handler
});

// Second handler — sends the final response
router.get('/chain', (req, res) => {
  console.log("Second route handler executed");
  res.write("<h2>I've finished the chain !</h2>");
  res.end(); // must end the response
});

router.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'a.html'));
});


// Export the router object so index.js can access it
module.exports = router;
