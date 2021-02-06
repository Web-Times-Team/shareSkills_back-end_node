/**
 * 
 */
const models = require('../models/user');
const dbInstanciator = require('../db/db-instanciator');
const dbInterface = dbInstanciator.dbInterface;


exports.insertInTable = async(userData, table) => {
    try {
        const result = await dbInterface.insertInTable(table, userData);
        return result;
    } catch (err) {
        throw err;
    }

}

exports.getDataFromTableWhere = async(userData, table) => {
    try {
        const result = await dbInterface.getDataFromTableWhere(table, userData);
        return result;
    } catch (err) {
        throw err;
    }
}

/**
 * get data with natural join table
 */
exports.getDataFromNatJTable = async(table1, table2, table3, table4) => {
    try {
        const result = await dbInterface.getDataFromNatJTable(table1, table2, table3, table4);
        return result;
    } catch (err) {
        throw err;
    }
}

exports.deleteData = () => {

}

/**
 * data model
 */
const DataModels = Object.freeze({
    user: 0,
    login: 1
})
exports.DataModels = DataModels;
exports.isConsistency = (data, modelChoice) => {
    // faut que je me mette d'accord sur c'est quoi une bonne donnée 
    const properties = selectModelProperties(modelChoice);

    const dataProperties = Object.keys(data);
    // cherche si des propriétés du clients sont bien inclus dans celle du model
    let isInclude = true;
    i = 0;
    while (isInclude === true &&
        i < dataProperties.length) {
        isInclude = properties.includes(dataProperties[i]);
        i++;
    }
    return isInclude;
}

selectModelProperties = (modelChoice) => {
    let properties;
    switch (modelChoice) {
        case DataModels.user:
            properties = Object.getOwnPropertyNames(new models.User());
            break;
        case DataModels.login:
            properties = Object.getOwnPropertyNames({ email, password });
            break;
    }
    return properties
}