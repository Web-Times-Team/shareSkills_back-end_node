/**
 * 
 */


const usersTable = 'users';
const sharersTable = 'sharers';
const teachersTable = 'teachers';
const employersTable = 'employers';
const dbInterfaceWrapper = require('../db/db-interface-wrapper');
const DataModels = dbInterfaceWrapper.DataModels;
const bcrypt = require('bcrypt');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.addUser = async(req, res) => {
    let result;
    const userData = req.body;
    // add data consistence checking actions
    if (dbInterfaceWrapper.isConsistency(userData, DataModels.user)) {
        userData.password = await cryptingPassword(userData.password);
        try {

            result = await dbInterfaceWrapper.insertInTable({
                username: userData.username,
                lastname: userData.lastname,
                firstname: userData.firstname,
                dateOfBirth: userData.dateOfBirth,
                password: userData.password,
                email: userData.email,
                country: userData.country,
                region: userData.region,
                city: userData.city
            }, usersTable);

            if (userData.hasOwnProperty('price')) {
                result = await dbInterfaceWrapper.insertInTable({ id: result.insertId, price: userData.price }, teachersTable);
            } else if (userData.hasOwnProperty('companyName')) {
                result = await dbInterfaceWrapper.insertInTable({ id: result.insertId, companyName: userData.companyName }, employersTable);
            } else {
                result = await dbInterfaceWrapper.insertInTable({ id: result.insertId }, sharersTable);
            }
        } catch (err) {
            res.status(503).send(err);
        }

        res.json({
            user: result
        });

    } else {
        res.status(503).send(new Error('user data consistency'));
    }
}

/**
 * log user
 * @param {*} req 
 * @param {*} res 
 */
exports.login = (req, res) => {
        const user = Object.assign({}, req.user);
        delete user.password;
        res.json({
            user: user
        });
    }
    /**
     * logout user
     * @param {*} req 
     * @param {*} res 
     */
exports.logout = (req, res) => {
        req.logout();
        console.log(req);
    }
    /**
     * le transformer en promesse dès que possible
     */
cryptingPassword = (password) => {

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10,
            (err, salt) => {
                if (err) reject(err);
                bcrypt.hash(password, salt,
                    (err, hash) => {
                        if (err) reject(err);
                        //save pass to hash
                        resolve(hash);
                    })
            });
    });

}