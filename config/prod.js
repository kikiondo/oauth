// prod.js - production keys here !!!
// Key value pares. Variables de env son las del servidor y las tenemos que configurar
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecrete: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookeiKey: process.env.COOKIE_KEY
}
