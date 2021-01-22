const dbType = require('./db-type')
const connection = require('./db-creation');
const DbInstanciator = require('@web-times-team/db-handler').DbInstanciator(dbType, connection);
module.exports = new DbInstanciator();