import { Sequelize } from "sequelize";
// import User from "../app/models/User";

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
