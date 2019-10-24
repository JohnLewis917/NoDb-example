require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env 
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.post('/api/pokemon', ctrl.catch)
app.get('/api/pokemon', ctrl.getPokedex)
app.put('/api/pokemon/:id', ctrl.rename)
app.delete('/api/pokemon/:id', ctrl.release)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of beer on the wall`))