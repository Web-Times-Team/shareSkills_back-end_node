const express = require('express');
const passport = require('passport');
// mores informations about router
const router = express.Router();

const loginPage = require('../controllers/login-page');

/**
 * passport.authenticate() for login and passport.authorize() for authorisation
 */
router.post('/add-user', loginPage.addUser);
router.post('/login', passport.authenticate('local'), loginPage.login);
router.get('/logout', loginPage.logout)

module.exports = router;