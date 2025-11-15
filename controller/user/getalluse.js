const { getAllUsers } = require('../../functions/checkLogin');

module.exports = (req, res) => {
    const result = getAllUsers();
    return res.status(result.status).json(result);
};
