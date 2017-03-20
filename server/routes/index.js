// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

// require the users controller
let usersController = require('../controllers/users');


/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.displayHome(req, res);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  indexController.displayContact(req, res);

});

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
