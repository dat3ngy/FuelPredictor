const app = require('./app')
const port = 3000

// Starts the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})