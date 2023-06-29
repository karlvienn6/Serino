import express from 'express';
import {dbInit} from "./database/db"
import { Path } from './path/path';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, ()=>{
    dbInit();
    new Path(app);
    console.log("Server is running at port:"+3000);
});