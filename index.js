const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./config/keys')
const cookieSession = require('cookie-session') // Utilizar cookies
require('./models/User') // Solo necesita ejecutar, primero esta linea para que el eschema exista
require('./services/passport')
mongoose.connect(keys.mongoURI)

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookeiKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

// No va a regresar nada pero se tiene que ejecutar una vez ._.)/
// Invocamos una función si la necesidad de pasar una variable
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT)
