import express, { json } from 'express'
import router from './routes/router'

const app = express()

const main = async () => {
  app.use(json())

  app.use((req, _, next) => {
    console.log('Request incoming...', {
      params: req.params,
      body: req.body,
    })
    next()
  })
  app.use(router)

  app.listen('8080', () => {
    console.log('Listening on http://localhost:8080/')
  })
}

main().catch(err => console.error(err))
