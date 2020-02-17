/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/camelcase */
import Sequelize, {
  VirtualDataType,
  Model,
  StringDataType,
  NumberDataType,
  BuildOptions
} from "sequelize";

import sequelize from "sequelize";

interface UserInterface extends Model {
  id: NumberDataType;

  name: StringDataType;

  email: StringDataType;

  password_hash: StringDataType;

  password: VirtualDataType<UserInterface["password_hash"]>;

  readonly createdAt: Date;

  readonly updatedAt: Date;
}

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInterface;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const User = <UserStatic>sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

export default User;
