
import { Sequelize } from "sequelize";
import * as data from "../db.config.json"


export const sequelize = new Sequelize(data.DB, data.USER, data.PASSWORD, {
    host : data.HOST,
    dialect : "mysql",
    pool : {
        max : data.pool.max,
        min : data.pool.min,
        acquire : data.pool.acquire,
        idle : data.pool.idle
    },
});

export function dbInit(){
    sequelize.authenticate()
    .then(()=>{
        console.log("Database connection established");
    })
    .catch((error : Error)=>{
        console.log(error);
    });
}

// export const db = {
//     Sequelize : Sequelize,
//     sequelize : sequelize,
//     dbInit : dbInit
// }
