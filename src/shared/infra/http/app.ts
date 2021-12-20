import express from 'express'
import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import { errors } from 'celebrate'
import cors from 'cors'

import '@shared/infra/typeorm'

import routerError from '@shared/errors/RouterError'
import routes from '@shared/infra/http/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.use(errors())
app.use(routerError)

export default app
