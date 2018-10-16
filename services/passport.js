const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users') // Esquema ._.)/


// Creo que es como el stringify de JSON
passport.serializeUser((user, done) => {
  done(null, user.id) // Es el de la base de datos
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

// use es una función que necesita el strategy
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecrete,
    callbackURL: '/auth/google/callback'
  }, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId: profile.id}) // User es el que nos regresa google (mayuscula)
      if (existingUser) {
        // Tenemos el usuario
        console.log('ya hay usuario')
        done(null, existingUser) // Llega del callback de guardarlo ._.)/
      } else {
        // No tenemos usuario, lo vamos a crear
      const user = await new User({googleId: profile.id}) .save() // Instancia de usuario y salvandolo en la bd
        done(null,user)
      }
  })
)

module.exports = passport
