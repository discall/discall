import cors from 'cors'
import express, { json, urlencoded } from 'express'
import router from './routes/router'

const app = express()

const main = async () => {
  app.use(cors())
  app.use(urlencoded({ extended: true }))
  app.use(json())

  app.use((req, _, next) => {
    console.log('Request incoming...', {
      url: req.url,
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
