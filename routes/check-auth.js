/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.checkAuthenticated = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        }
        res.status(400).send('Bad Request');
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
exports.checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(400).send('Bad Request');
    }
    next()
}