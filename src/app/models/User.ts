import {
  VirtualDataType,
  Model,
  StringDataType,
  NumberDataType
} from "sequelize";

class User extends Model<User> {
  public id!: NumberDataType;

  public name!: StringDataType;

  public email!: StringDataType;

  public password_hash!: StringDataType;

  public password: VirtualDataType<User["password_hash"]>;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

export default new User();
