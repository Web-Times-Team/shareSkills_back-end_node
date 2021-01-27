const express = require('express');
// mores informations about router
const router = express.Router();

const contLoginPage = require('../controllers/cont-login-page');

router.get('/get-user', contLoginPage.getUser);
router.post('/add-user', contLoginPage.addUser);

module.exports = router;