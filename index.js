// for Faizou machine, 
// use nodedev to start app in dev environnement
// use nodedevc to inspect code in chrome
// use noderaspprod to start app in raspberry server

const express = require('express');
const app = express();
const routes = require('./configure');
const bodyParser = require('body-parser');
const dbType = require('./db/db-type')
const dbConfig = require('./db/config');
const { conn, type } = require('@web-times-team/db-handler').dbCreation(dbType, dbConfig);
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use('/', routes.EEPlatform);
app.listen(3000, () => {

    console.log('EE_platform App Http is listenning in port 3000');

});