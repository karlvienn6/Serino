import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET;

export async function middleware(req : Request, res : Response, next : NextFunction){

    

    try{
        const accessToken = req.headers['authorization'] || "error";
        console.log(accessToken);
        const verification = jwt.verify(accessToken, secret || "hehe");
        next();

    }catch(e)
    {
        res.json({status: 401, message : "You are unauthorized"});
        console.log(e);
    }
}

export function signToken(email : string){
    const expiresIn = 60 * 30;
    const token = jwt.sign({email:email}, secret || "hehe", {expiresIn : expiresIn});

    console.log(token);
    return token;
}