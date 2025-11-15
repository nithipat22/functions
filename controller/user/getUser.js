const { getUser } = require('../../functions/checkLogin');

module.exports = (req, res) => {
    const { username } = req.query;

    const result = getUser(username);

    return res.status(result.status).json(result);
};
