import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: 'wallet',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [__dirname + '/models/*.model.ts']
})

export default sequelize