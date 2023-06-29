import { Router } from "express";
import userService from "../service/user.service";

class UserController {

    constructor(){
        this.initApi();
    }
    router = Router();

    initApi(){
        this.router.get("/", async (req, res)=>{
            const result = await userService.get();
            res.json(result);
        });
        
        this.router.post("/login", async(req, res)=>{
            const result = await userService.login(req.body);
            res.json(result);
        });
    }
}


export default new UserController().router;