import {Model, DataTypes} from "sequelize"
import { sequelize } from "../database/db";

class MoneyValues extends Model {
    public id! : number;
    public treasure_id! : number;
    public amt! : number;
}

MoneyValues.init(
    {
        id :{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        treasure_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        amt : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },{
        sequelize,
        modelName: 'MoneyValues',
        tableName : 'money_values',
        timestamps: false
    }
)


MoneyValues.sync();

export default MoneyValues;