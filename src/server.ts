import express from 'express'

import { Router, Request, Response } from 'express';
import sequelize from './sequelize'

import { postPerson, getPersons } from './controllers/person.controller'

sequelize.sync({ force: true })

const app = express();

const route = Router()

app.use(express.json())

route.get('/', getPersons)

route.post('/', postPerson)

app.use(route)

app.listen(3333, () => 'server running on port 3333')
