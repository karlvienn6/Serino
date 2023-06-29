
import { signToken } from "../auth/auth";
import User from "../models/user.model";

class UserService {
    constructor(){
        
    }

    async get(){
        const data = await User.findAll();
        return data;
    }

    async login(body : any){

        const {email, password} = body;
        const data = await User.findOne({
            where : {
                email : email,
                password : password
            }
        });

        const token = signToken(email);
        console.log(token);

        return{accessToken : token}

    }
}

export default new UserService();