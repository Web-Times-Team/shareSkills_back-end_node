// for Faizou machine, 
// use nodedev to start app in dev environnement
// use nodedevc to inspect code in chrome
// use noderaspprod to start app in raspberry server

const express = require('express');
const app = express();
const routes = require('./configure');
const bodyParser = require('body-parser');
const dbcreation = require('./db/db-creation');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use('/', routes.EEPlatform);
app.listen(3000, () => {

    console.log('EE_platform App Http is listenning in port 3000');

});