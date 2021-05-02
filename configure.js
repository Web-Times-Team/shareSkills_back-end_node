// parse application/json
exports.bodyParser = require('body-parser');
const dbType = require('./db/db-type');
const dbConfig = require('./db/config');
exports.cors = require('cors');
exports.dbCreationReturn = require('@web-times-team/db-handler').dbCreation(dbType, dbConfig);
exports.passport = require('passport');
exports.cookieParser = require('cookie-parser');
exports.session = require('express-session');


exports.welcomeRoutes = require('./routes/welcome');
exports.communityRoutes = require('./routes/community');
exports.loginPageRoutes = require('./routes/login-page');