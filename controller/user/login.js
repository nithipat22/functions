const router = require('../../routes/routes');
const functionlogin = require('../../functions/functions.login')

router.post('/', (req, res) => {
    const { usernamer, password } = req.body

    const result = login(usernamer, password)

    return res.status(result.status).json({ message: result.message })
})



module.exports = router