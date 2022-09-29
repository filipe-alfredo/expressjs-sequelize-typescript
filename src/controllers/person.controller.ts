import { Request, Response } from 'express';
import Address from '../models/address.model';
import Person from '../models/person.model';

const postPerson = async (req: Request, res: Response) => {
  const result = await Person.create(req.body, {
    include: [{model: Address}]
  })
  res.status(201).json(result).end()
}

const getPersons = async (req: Request, res: Response) => {
  const result = await Person.findAll({
    include: [{model: Address}]
  })
  res.status(200).json(result).end()
}

export {
  postPerson,
  getPersons
}