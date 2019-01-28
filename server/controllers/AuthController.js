const User = require("../db/model").User
const jwt = require("jwt-simple")

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode(
    {
      sub: user.id, iat: timestamp
    },
    "yourJWTSecret"
  )
}

class AuthController {
  signup(req, res) {
    let { firstName, lastName, email, password } = req.body
    email = email.toLowerCase()

    User.findOne({
      where: { email }
    }).then(user => {
      // if user already exists
      if (user !== null) {
        return res.status(422).json({ err: true, message: "Cannot create user" })
      }
      // create new user
      User.create({
        firstName,
        lastName,
        email,
        password
      }).then(user => {
        // TBD: transformable payload
        delete user.password
        res.json(user)
      })
    })
  }
  signin(req, res) {
    res.status(200).json({
      token: tokenForUser(req.user)
    })
  }
}

module.exports = new AuthController()

