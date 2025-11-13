const express = require('express')
const app = express()
const port = 3000
const loginRoutes = require('./controller/user/login')
const registerRoutes = require('./controller/user/register')



app.use(express.json())
app.use(express.static('public'))

app.use('/api/login', loginRoutes)
app.use('/api/register', registerRoutes)


app.listen(port, () => {
    console.log(`app on http://localhost:${port}`)
})

