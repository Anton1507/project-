const UserModel = require("../model/user-model");
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');
const tokenService = require('./token_service');
const UserDto = require('../dtos/user_dto');
const userModel = require("../model/user-model");

class UserService {
    async registration(email, password, ) {


        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адрессом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 4)


        const user = await UserModel.create({ email, password: hashPassword });


        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto,
        }

    }
    async login(email,password){
        const user=await UserModel.findOne({email});
        if(!user){
            throw ApiError.BadRequest(`Пользователь с таким email не найден`);
        }
        const isPassEquil = await bcrypt.compare(password,user.password);
        if(!isPassEquil){
            throw ApiError.BadRequest(`Пароль неверный`);

        }
        const userDto= new UserDto(user);
        const tokens=tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return{...tokens,user:userDto}




    }
    async logout (refreshToken){
        const token = await tokenService. removeToken(refreshToken);
        return token;

    }
    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.BadRequest('Пользователь не авторизован');

        }
        const userData = tokenService.validataRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError();
        }
        const user=await  UserModel.findById(userData.id);
        const userDto= new UserDto(user);
        const tokens=tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return{...tokens,user:userDto};

    }

    async getAllUser(){
        const users = await userModel.find();
        return users;

    }
}

module.exports = new UserService();