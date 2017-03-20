// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let usersController = require('../controllers/users');

// GET /login - render the login view
router.get('/login', (req, res, next) => {
  usersController.displayLogin(req, res);
  // POST /login - process the login attempt
}).post('/login', usersController.processLogin());


// GET /register - render the registration view
router.get('/register', (req, res, next) => {
  usersController.displayRegistration(req, res);
// POST / register - process the registration submission
}).post('/register', (req, res, next) => {
  usersController.processRegistration(req, res);
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next) => {
   usersController.performLogout(req, res);
});


module.exports = router;