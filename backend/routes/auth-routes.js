// create instance of the router
const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    // TODO  //frontend main localhost /homepage
    res.json({ user: req.user || null });
    // res.render('login', { user: req.user });
})

// auth logout
router.get('/logout', (req, res) => {
    // req.logout((err) => {
    //     if (err) { return next(err); }
    //     req.session = null; // Clear the session
    //     res.send({ message: 'Logout successful' });
    // });
    req.logout();
    res.json({ message: 'Logout successful' });

    //frontend main localhost /homepage
    // res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {  
    // res.send('YOU REACHED THE CALLBACK URI');
    res.redirect(`http://localhost:3000/profile?user=${encodeURIComponent(JSON.stringify(req.user))}`);
})

// Middleware to protect routes
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: 'Unauthorized' });
    } else {
        next();
    }
};

// Profile route (secure)
router.get('/', authCheck, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;