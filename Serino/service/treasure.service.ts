import Treasure from "../models/treasure.model";
import distances from "../helper/validation";
import MoneyValues from "../models/moneyvalues.model";
import { Op } from "sequelize";

class TreasureService {

    constructor(){
        
    }

    async get(){
        const result1 = await Treasure.findAll({
            include : MoneyValues
        })
        return result1;
    }

    async getTreasureBoxes(body : any) {
        
        const {latitude, longitude, distance, prizeValue} = body;

        if(!latitude || !longitude || !distance)
            return {status : 400, message : "Make sure the fields are not null and correct"};

        if(distance != 1 && distance != 10)
            return {status : 400, message : "1 and 10 are the only numbers you can enter."}

        if(prizeValue <10 && prizeValue >30 )
            return {status : 400, message : "10 30 are the only numbers you can enter."}
        
        if(typeof prizeValue === 'number' && Number.isFinite(prizeValue) && (prizeValue % 1 !== 0)){
            return {status : 400, message : "You must enter only integer"}
        }

        const result = await Treasure.findAll();

        const filterResult = result.filter(treasure => {
            const execute = distances(latitude, longitude, treasure.dataValues.latitude, treasure.dataValues.longtitude);
            return execute < distance;
        });

        

        if(prizeValue){
            const returnObject = [];
            const moneyValueResult = await MoneyValues.findAll({
                attributes: ['treasure_id', 'amt'],
                where:{
                    amt : {
                        [Op.eq] : prizeValue 
                    }
                }
            });

            for(let i = 0; i<moneyValueResult.length; i++){
                const find= filterResult.find(treasure => treasure.id === moneyValueResult[i].treasure_id)
                if(find){
                    const modifiedResult = {
                        ...find.dataValues,
                        amount : moneyValueResult[i].amt
                    }
                    returnObject.push(modifiedResult);
                }
            }
            
            return returnObject
        }

        return filterResult;
    }

}

export default new TreasureService();