// Libraries used for the Node Express Server
const express = require('express')
const app = express()

// Used for parsing JSON to retrieve information from frontend
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Start at index.html
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

// Client Registration backend
const registerRouter = require('./routes/register')
app.use('/register', registerRouter)

// Login backend
const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

// Profile Management backend
const profileManRouter = require('./routes/profileManagement')
app.use('/profile', profileManRouter)

module.exports = app