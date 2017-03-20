let mongoose = require('mongoose');

// define the game model
let game = require('../models/games');

// display the games list
module.exports.displayGameList = (req, res) => {
    // find all games in the games collection
    game.find((err, games) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('games/index', {
                title: 'Games',
                games: games,
                displayName: req.user.displayName
            });
        }
    });
}

// display the details page - allowing users to add a new game
module.exports.displayAddPage = (req, res) => {
    res.render('games/details', {
        title: "Add a new Game",
        games: '',
        displayName: req.user.displayName
    });
}

// create a new game and insert it into database
module.exports.CreateNewGame = (req, res) => {
    let newGame = game({
        "name": req.body.name,
        "cost": req.body.cost,
        "rating": req.body.rating
    });

    game.create(newGame, (err, game) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/games');
        }
    });
}

// display the details page
//find th egame by id and populate the form
module.exports.displayGameDetails = (req, res) => {
    try {
        // get a reference to the id from the url
        let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one game by its id
        game.findById(id, (err, games) => {
            if (err) {
                console.log(err);
                res.end(error);
            } else {
                // show the game details view
                res.render('games/details', {
                    title: 'Game Details',
                    games: games,
                    displayName: req.user.displayName
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.redirect('/errors/404');
    }
}

// update an existing game in the games collection
module.exports.updateGameDetails = (req, res) => {
    // get a reference to the id from the url
    let id = req.params.id;

    let updatedGame = game({
        "_id": id,
        "name": req.body.name,
        "cost": req.body.cost,
        "rating": req.body.rating
    });

    game.update({ _id: id }, updatedGame, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the game List
            res.redirect('/games');
        }
    });
}

//delete a game from the games collection
module.exports.deleteGame = (req, res) => {
    // get a reference to the id from the url
    let id = req.params.id;

    game.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the games list
            res.redirect('/games');
        }
    });
}