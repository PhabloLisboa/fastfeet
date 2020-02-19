import Sequelize from "sequelize";
import { Model } from "sequelize-typescript";

class Recipient extends Model {
  public name!: string;

  public street: string;

  public num: number;

  public complement: string;

  public state!: string;

  public city!: string;

  public cep!: string;

  public readonly created_at: Date;

  public readonly updated_at: Date;

  static init(sequelize): any {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        num: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        cep: Sequelize.STRING
      },
      { sequelize }
    );

    return this;
  }
}

export default Recipient;
