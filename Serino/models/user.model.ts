import {Model, DataTypes} from "sequelize"
import { sequelize } from "../database/db";

class User extends Model {
    public id! : number;
    public name! : string;
    public age! : number;
    public passowrd! : string;
    public email! : string
}

User.init(
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        age : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        sequelize,
        tableName : 'users',
        timestamps: false
    }
)

User.sync();

export default User;