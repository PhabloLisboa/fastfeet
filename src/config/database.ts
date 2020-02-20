import { Options } from "sequelize/types";
import environment from "../config/environment";

const databaseConfig: Options = {
  dialect: "mysql",
  host: environment.database.host,
  define: {
    timestamps: true,
    underscored: true
  }
};

export default databaseConfig;
