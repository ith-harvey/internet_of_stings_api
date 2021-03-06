const bcrypt = require('bcrypt-as-promised')
const express = require('express')
const knex = require('../db/connection')
const router = express.Router()
const jwt = require('jwt-simple')

// LOGIN
router.post('/login', (req, res, next) => {
  const { username, password } = req.body

  if (!username || !username.trim()) {
   return next({ status: 400, message: 'Username must not be blank' })
 }

 if (!password) {
   return next({ status: 400, message: 'Password must not be blank' })
 }

  let user

  knex('users').where('username', username).first().then((row) => {
      user = row
      return bcrypt.compare(password, user.hashed_password)
    })
    .then(() => {
      delete user.hashed_password
      let token = jwt.encode(user, process.env.JWT_TOKEN)
      res.json({success: true, token: 'JWT ' + token})
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw {
        status: 400,
        message: 'Bad username or password'
      }
    })
    .catch((err) => {
      next(err)
    })
})

// SIGN UP
router.post('/signup', (req, res, next) => {

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
        .insert({
          email: req.body.email,
          username: req.body.username,
          hashed_password: hashed_password
        }, '*')
    })
    .then((users) => {
      const user = users[0]
      delete user.hashed_password
      let token = jwt.encode(user, process.env.JWT_TOKEN)
      res.json({success: true, token: 'JWT ' + token, user:user})
    })
    .catch((err) => {
      next(err)
    })
})


module.exports = router
