import { Application } from "express";
import userRouter from "../controller/user.controller";
import treasureRouter from "../controller/treasure.controller";
import moneyValueRouter from "../controller/moneyvalue.controller";

export class Path{
    constructor(app : Application){
        app.use("/user", userRouter)
        app.use("/treasure", treasureRouter)
        app.use("/moneyvalue", moneyValueRouter);
    }
}