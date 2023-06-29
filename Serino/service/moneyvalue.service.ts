
import MoneyValues from "../models/moneyvalues.model";

class MoneyValueService {

    constructor(){

    }


    async get(){
        const result = await MoneyValues.findAll({
            attributes: ['treasure_id', 'amt'],
        });


        return result;
    }

    async getTreasureMoney(){
        
    }

}

export default new MoneyValueService();