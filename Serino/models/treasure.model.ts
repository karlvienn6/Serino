import {Model, DataTypes} from "sequelize"
import { sequelize } from "../database/db";
import MoneyValues from "./moneyvalues.model";

class Treasure extends Model {
    public id! : number;
    public latitude! : number;
    public longtitude! : number;
    public name! : string;
}

Treasure.init(
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        latitude : {
            type : DataTypes.DOUBLE,
            allowNull : false
        },
        longtitude : {
            type : DataTypes.DOUBLE,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        sequelize,
        modelName: 'Treasure',
        tableName : 'treasures',
        timestamps: false
    }
)

Treasure.hasMany(MoneyValues);
MoneyValues.belongsTo(Treasure);

Treasure.sync();

export default Treasure