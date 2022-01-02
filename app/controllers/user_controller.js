const userService = require('../service/user_service');
const {validationResult}=require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController{
    async registration (req,res,next){
        try{
            const errors = validationResult(req);
            console.log("запрос на регестрацию пришёл",req.body)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации',errors.array()))
            }
            const {name,surname,nikName,tel,email,password,}=req.body;
            
            const userData= await userService.registration(name,surname,nikName,tel,email,password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            return res.json(userData)
            
        }catch(e){
            next(e)
            
        }

    }
    async login (req,res,next){
        try{
            const {email,password}= req.body;
            console.log(email,password);
            const userData=await userService.login(email,password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true});
            return res.json(userData)


        }catch(e){
            next(e)
        }

    }
    async logout (req,res,next){
        try{
            const {refreshToken}=req.cookies;
            console.log(refreshToken);
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);

        }catch(e){
            next(e)
        }

    }
    async activate(req,res,next){
        try{

        }catch(e){
            next(e)
        }

    }
    async getUsers (req,res,next){
        try{
            const users = await userService.getAllUser();
            return res.json(users);
        }catch(e){
            next(e)
        }

    }
    async refresh (req,res,next){
        try{
            const {refreshToken}=req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000, httpOnly:true});
            return res.json(userData);
        }catch(e){
            next(e)
        }

    }

}

module.exports=new UserController();