const express = require("express");
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

const path = require('path');


const fs = require('fs');
//const Config = JSON.parse(fs.readFileSync('./cfg.json'));
const Config = JSON.parse(fs.readFileSync(path.join(__dirname, "../../utils/cfg.json")));



passport.use(new GithubStrategy(
    // JSON.parse(fs.readFileSync("./github-keys.json")),
    JSON.parse(fs.readFileSync(path.join(__dirname, "../../utils/github-keys.json"))),
    function (accessToken, refreshToken, profile, done) { return done(null, profile); }
));


const router = express.Router();

router.get("/", async (req, res) => { /*need TOKEN*/

    res.status(200).json("Auth :)");


});


router.get("/githubcallback", (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
    console.log("callback")
    //res.redirect('/users/' + req.user.username);

    res.status(200).json("connexion OK :)");

});


router.get("/github", passport.authenticate('github'),
    function (req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

router.get("/github/callback", (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
    console.log("callback")
    //res.redirect('/users/' + req.user.username);

    res.status(200).json("connexion OK :)");

});



/*
router.get("/github/callback", passport.authenticate('github', { failureRedirect: '/' }),
function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
    console.log("callback")
    //res.redirect('/users/' + req.user.username);

    res.status(200).json("connexion OK :)");

});
*/


/*
router.get("/", async (req, res) => {
 
    await passport.authenticate('github'), (req, res) => {
 
        console.log(req)
        console.log(res)
 
    }
    // console.log("z = ", z)
 
    res.status(200).json("/auth/github " + new Date());
    //console.log(passport.authenticate('github', { failureRedirect: '/' }))
 
 
    // res.status(200).json("/auth/github");
 
 
});
 
*/

module.exports = router;