import { Handler } from 'express'

const extractJwt: Handler = (req, res, next) => {
  const [, token] = (req.headers['authorization'] ?? '')?.split(' ')

  if (!token) {
    res.sendStatus(500)
    return
  }

  res.locals.token = token

  next()
}

export default extractJwt
