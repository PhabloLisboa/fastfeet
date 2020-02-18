import { Sequelize } from "sequelize";

import User from "../app/models/User";

import configDatabase from "../config/database";

const models = [User];

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(configDatabase);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
