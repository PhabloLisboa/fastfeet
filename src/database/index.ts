import { Sequelize } from "sequelize";

import User from "../app/models/User";
import Recipient from "../app/models/Recipient";

import configDatabase from "../config/database";
import environment from "../config/environment";

const models = [User, Recipient];

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(
      environment.database.db,
      environment.database.user,
      environment.database.pass,
      configDatabase
    );
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
