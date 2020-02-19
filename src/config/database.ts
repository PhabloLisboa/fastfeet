import { Options } from "sequelize/types";

const databaseConfig: Options = {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: true,
    underscored: true
  }
};

export default databaseConfig;
