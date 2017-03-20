// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller for authentication
let usersController = require('../controllers/users');
// require the games controller
let gamesController = require('../controllers/games');

/* GET games List page. READ */
router.get('/', usersController.requireAuth, (req, res, next) => {
  gamesController.displayGameList(req, res);
});

//  GET the Game Details page in order to add a new Game
router.get('/add', usersController.requireAuth, (req, res, next) => {
  gamesController.displayAddPage(req, res);
  // POST process the Game Details page and create a new Game - CREATE
}).post('/add', usersController.requireAuth, (req, res, next) => {
  gamesController.CreateNewGame(req, res);
});

// GET the Game Details page in order to edit a new Game
router.get('/:id', usersController.requireAuth, (req, res, next) => {
  gamesController.displayGameDetails(req, res);
  // POST - process the information passed from the details form and update the document
}).post('/:id', usersController.requireAuth, (req, res, next) => {
  gamesController.updateGameDetails(req, res);
});

// GET - process the delete by user id
router.get('/delete/:id', usersController.requireAuth, (req, res, next) => {
  gamesController.deleteGame(req, res);
});


module.exports = router;
