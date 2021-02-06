const dbInstanciator = require('../db/db-instanciator');
const dbInterface = dbInstanciator.dbInterface;
const communityTable = 'conversations';
const usersTable = 'users';

/**
 * 
 * @param {*} req UserRegion
 * @param {*} res 
 */

exports.getCommunity = (req, res) => {
    // add cohenrence checking before continuous
    dbInterface.getDataFromTableWhere(communityTable, req.body).then((result) => {
        res.json({
            user: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });
}

exports.getActiveUsers = (req, res) => {
    // add cohenrence checking before continuous
    dbInterface.getDataFromTableWhere(usersTable, req.body).then((result) => {
        res.json({
            user: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });
}