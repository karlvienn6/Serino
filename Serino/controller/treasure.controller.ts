import { Router } from "express";
import treasureService from "../service/treasure.service";
import { middleware } from "../auth/auth";

class TreasureController {

    constructor(){
        this.initApi();
    }
    router = Router();

    initApi(){

        this.router.use(middleware);

        this.router.get("/", async (req, res)=>{
            const result = await treasureService.get();
            res.json(result);
        });

        this.router.post("/boxes", async (req, res) => {
            const result = await treasureService.getTreasureBoxes(req.body);
            res.json(result);
        });
    }

}


export default new TreasureController().router;