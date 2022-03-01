// Libraries used for the Node Express Server
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// Used for parsing JSON to retrieve information from front-end
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

// Start at index.html
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

const registerRouter = require('./routes/register')
app.use('/register', registerRouter)

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})