import environment from "../config/environment";

module.exports = {
  dialect: "mysql",
  host: environment.database.host,
  username: environment.database.user,
  password: environment.database.pass,
  database: environment.database.db,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  underscoredAll: true
};
