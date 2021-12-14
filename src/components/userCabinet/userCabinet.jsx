import React from "react";
import { useDispatch } from "react-redux";
import s from "./styleCabinet.module.css";
import {fetchLogOutFunc} from "./../../store/async_action/work";
import {userReg} from '../../store/userReducer'
import { useHistory } from "react-router";

const Cabinet = ()=>{
    const userStorage = localStorage.getItem('UserData');
    const user =JSON.parse(userStorage);
    const dispatch = useDispatch();
    let history = useHistory();
    console.log(user,'user in cab')
    const exid = ()=>{
        dispatch(fetchLogOutFunc());
        localStorage.removeItem('UserData');
        localStorage.removeItem('AccessToken');
        dispatch(userReg());
        history.push("/home");
        
    } 
    return(
        <div className={s.cabinet_conteiner}>
        <div>
            <p>Имя : {user.name}</p> 
            <p>Фамилия:{user.surname}</p>
            <p>e-mail:{user.email}</p>
            <p>Nik Name : {user.nikName}</p>
            <p>Номер телефона : {user.tel}</p>
            
            
        </div>
        <div>
            <p>Работы которые понравились</p>

        </div>
        <div><button onClick={exid} >Выйти с аккаунта </button></div>
        </div>
    )
}

export default Cabinet;