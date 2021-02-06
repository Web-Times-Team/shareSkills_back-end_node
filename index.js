// for Faizou machine, 
// use nodedev to start app in dev environnement
// use nodedevc to inspect code in chrome
// use noderaspprod to start app in raspberry server

const express = require('express');
const app = express();
const configuration = require('./configure');

app.use(configuration.cors());
app.use(configuration.bodyParser.urlencoded())
app.use(configuration.bodyParser.json());
app.use(configuration.passport.initialize());
app.use(configuration.passport.session());
require('./passeport/config');
// Routes 
app.use('/welcome', configuration.welcomeRoutes);
app.use('/login-page', configuration.loginPageRoutes);
app.use('/community', configuration.communityRoutes);


// server
app.listen(3000, () => {

    console.log('EE_platform App Http is listenning in port 3000');

});