const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String
})

mongoose.model('users', userSchema)

// No va a regresar nada, por eso se llama sin una constante.