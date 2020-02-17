import { Sequelize } from "sequelize";

import configDatabase from "../config/database";

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(configDatabase);
  }
}

export default new Database();
