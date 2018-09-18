const passport = require('passport')

// Al exportar una función tengo la ventaja de que le puedo pasar una propiedad
// Route handler

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate(
      'google',
      {scope: ['profile', 'email']}
    )
  )

  // Aquí ya tenermo el token c:
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

  app.get(
    '/api/current_user', (req, res) => {
      res.send(req.user)
    }
  )
}
