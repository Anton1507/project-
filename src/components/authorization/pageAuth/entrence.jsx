import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from './authorizat.module.css';
import { fetchLoginFunc} from "../../../store/async_action/work";
import { pageReg } from "../../../store/appReducer";

const Entrence = () => {
    const dispatch = useDispatch();
    const [stateInp, setStateInp] = useState({
        email: "",
        password: "",
    })
    const submitHandel = (event) => {
        event.preventDefault();
        if (!stateInp.email || !stateInp.password) {
            return alert("Пароль или Email неуказанно")
        };
        console.log(stateInp);
        dispatch(fetchLoginFunc(stateInp))
    }
    const handelChange = (event) => {

        setStateInp(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))


    }
    const authHandel = ()=>{
        dispatch(pageReg())
        
    }
    
    
    return (
        
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" onChange={handelChange}  value={stateInp.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className ="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" onChange={handelChange} value={stateInp.password}  className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={submitHandel} className="btn btn-primary">Войти</button>
            <span className={s.span_reg} onClick={ authHandel}>Зарегистрироваться</span>
        </form>
    )
}

export default Entrence;