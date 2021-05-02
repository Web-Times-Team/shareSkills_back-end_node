const usersTable = 'users';
const sharersTable = 'sharers';
const teachersTable = 'teachers';
const employersTable = 'employers';
// configure passport-local
const passport = require('passport');
const dbInterfaceWrapper = require('../db/db-interface-wrapper');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({ usernameField: 'email' },
    async(email, password, done) => {
        try {
            result = await dbInterfaceWrapper.getDataFromTableWhere({ email }, usersTable);
            if (result.length === 0) {
                return done(null, false, { message: 'that email is not registered' });
            }
            const user = result[0];
            await comparePassword(password, user.password);
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));

/**
 * put credentials in cookies
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
})

/**
 * get credential from cookies
 */

passport.deserializeUser(async(id, done) => {
    try {
        user = await dbInterfaceWrapper.getDataFromTableWhere({ id }, usersTable);
        if (!user) {
            return done(new Error('user not found'));
        }
        done(null, user);

    } catch (err) {
        done(err);
    }
})

comparePassword = (password, userPassword) => {
    return new Promise(
        (resolve, reject) => {
            bcrypt.compare(password, userPassword, (err, isMatch) => {
                if (err) reject(err);

                if (isMatch) {
                    return resolve(password);
                } else {
                    return reject(new Error('pass incorrect'));
                }
            })
        }
    );
}