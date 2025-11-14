const { checkLogin } = require('../../functions/checkLogin');

module.exports = (req, res) => {
    const { username, password } = req.body;

    const result = checkLogin(username, password);

    return res.status(result.status).json({ message: result.message });
};


