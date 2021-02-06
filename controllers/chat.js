const dbInterfaceWrapper = require('../db/db-interface-wrapper');
const conversationsTable = 'conversations';

/**
 * 
 * @param {*} req condition field: creatorId
 * @param {*} res 
 */

exports.getConversations = (req, res) => {

    if (Object.keys(req.body)[0] === 'creatorId') {
        dbInterfaceWrapper.getDataFromTableWhere(req, res, conversationsTable);
    }
}