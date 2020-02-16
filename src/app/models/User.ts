import * as sequelize from 'sequelize'
import { Model } from 'sequelize-typescript'


class User extends Model<User>{
   init(initOptions){
    super.init({name: sequelize.DataTypes.STRING,
      email: sequelize.DataTypes.STRING,
      password_hash: sequelize.DataTypes.STRING,

    }, initOptions)
  }
}

export default new User();

