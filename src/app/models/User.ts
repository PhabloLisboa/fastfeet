import Sequelize from "sequelize";
import { Model } from "sequelize-typescript";
import bcrypt from "bcryptjs";

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password: string;

  public password_hash: string;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;

  static init(sequelize): any {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING
      },
      { sequelize }
    );

    this.addHook("beforeSave", async (user: any) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User;
