// display the home page
module.exports.displayHome = function (req, res) {
    res.render('content/index', {
        title: 'Home',
        games: '',
        displayName: req.user ? req.user.displayName : ''
    });
}

// display the contact page
module.exports.displayContact = (req, res) => {
    res.render('content/contact', {
    title: 'Contact',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
