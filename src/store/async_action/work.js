import { getWork,showWork} from "../workReducer";
import { regfunc,tookModal } from "../appReducer";
import axios from "axios";
import api from "./../../http/index";
import {userReg} from "../userReducer";

export const fetchWork = (req)=>{
    
    return async dispatch=>{
        console.log(req)
        const respons =await axios.post('http://localhost:5000/work/getWork',{...req});
        
        dispatch(getWork(respons.data));
    }
    
}; 
export const fetchShowWork = (req)=>{
    return async dispatch => {
        const respons = await axios.post('http://localhost:5000/work/showWork', {...req});
        dispatch(showWork(respons.data));
    }
}

export const fetchSeachWork = (req)=>{
    
    return async dispatch=>{
        if(!req) return 
        console.log(req)
        const respons =await axios.post('http://localhost:5000/work/seachWork',{seach:req});
        console.log(respons)
        if(respons.data === null){return}
        dispatch(getWork(respons.data));
    }
    
}; 


export const fetchRegFunc = (req)=>{
    return async dispatch=>{
        const respons = await api.post('/registration',{...req});
        console.log(respons)
        console.log(respons.data.user)
        localStorage.setItem("AccessToken",respons.data.accessToken);
        localStorage.setItem("UserData", JSON.stringify(respons.data.user));
        dispatch(regfunc())
        dispatch(userReg())
    }
}

export const fetchLoginFunc = (req)=>{
    return async dispatch=>{
        console.log(req)
        const respons = await api.post('/login',{...req});
        localStorage.setItem("AccessToken",respons.data.accessToken);
        localStorage.setItem("UserData", JSON.stringify(respons.data.user));
        console.log(respons.data)
       
        dispatch(userReg())
        dispatch(tookModal())
    }
}

export const fetchLogOutFunc = ()=>{
    return async dispatch=>{
        const respons = await axios.post('http://localhost:5000/api/logout',{});
        console.log(respons.data)
        dispatch(userReg())
    }
}