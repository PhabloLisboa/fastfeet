
import User from '../app/models/User'
import { Sequelize } from 'sequelize'

import configDatabase from '../config/database'

const models = [User]


class Database{
  connection: Sequelize

  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(configDatabase)

    models.map(model => model.init(this.connection))
  }

}
