import { Sequelize } from "sequelize";

import User from "../app/models/User";
import Recipient from "../app/models/Recipient";

import configDatabase from "../config/database";

const models = [User, Recipient];

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(
      "fastfeet",
      "root",
      "123456",
      configDatabase
    );
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
