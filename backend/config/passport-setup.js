const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user-model');

//cookies creation
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//cookies come back from the browser
passport.deserializeUser((id, done) => {
    // find the user by ID that we got from cookie
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        //options for the google stragegy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, (accessToken, refershToken, profile, done) => {
    //passport callback function
    console.log('passport callback fired: ');
    // TODO PRINT PROFILE ID IN CONSOLE
    console.log(profile);

    //check if user already exists in database
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser) {
            //already have the user
            console.log('user is:', currentUser);
            done(null, currentUser);
        } else {
            // if not, create user in database
            // save profile content in database
            new User({
                username: profile.displayName,
                googleId: profile.id,
                gender: profile.gender,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile._json.picture
            }).save().then((newUser) => {
                console.log('New user created' + newUser);
                done(null, newUser);
            })
        }

    })


})
);

module.exports = passport;

// AccessToken: this is token we recieve by google
// refreshToken: to refersh the accessToken, since its expires after some time
// done: we call when we are done with callback function