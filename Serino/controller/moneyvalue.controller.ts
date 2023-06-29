import { Router } from "express";
import moneyvalueService from "../service/moneyvalue.service";

class MoneyValueController {

    constructor(){
        this.initApi();
    }
    router = Router();

    initApi(){
        this.router.get("/", async(req, res)=> {
            const result = await moneyvalueService.get();
            res.json(result);
        });
    }

}


export default new MoneyValueController().router;