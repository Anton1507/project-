import React, { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { tookModal } from "../../store/appReducer";
import Entrence from "../authorization/pageAuth/entrence";
import s from './header.module.css';
import Seach from './seach/seach';

const IconAuth = () => {
    const [stateReg, setStateReg] = useState(false);
    const dispatch = useDispatch();

    return (<div> { !stateReg ?
        <button className={s.register} onClick={() => dispatch(tookModal())}>
            <img className={s.image} src="https://img.icons8.com/ios/50/000000/user--v1.png" />
        </button>
        : null}
    </div>)
}

const Header = () => {
    const [activUser,setActiveUser]=useState(false);
    let x = document.cookie
    console.log(activUser,'activUSer in header')
    console.log("cooki",x);
    console.log(localStorage.AccessToken,"local Storage.AccessToken");
    const activUserReg = useSelector(state => state.user.user_reg);
    useEffect(()=>{
        if (localStorage.AccessToken ){
            setActiveUser(true)
        }
        if(!localStorage.AccessToken){
            setActiveUser(false)
        }
    },[localStorage.AccessToken])






    return (<div className={s.header_block}>
        <div className={s.header_content}>
            <NavLink to="/home" className={s.navLink}><div>Главная </div> </NavLink>
            <NavLink to='/outServices' className={s.navLink}><div>Наши Услуги </div></NavLink>
            <NavLink to='/costOfWork' className={s.navLink}><div>Стоимость работы </div> </NavLink>
            <NavLink to='/reviers' className={s.navLink}><div>Отзывы </div></NavLink>
            <NavLink to='/aboutUs' className={s.navLink} ><div>О Нас</div></NavLink>


            {activUser ?
                <NavLink to="/cabinet" className={s.register}><img  className={s.image} src="https://img.icons8.com/ios/50/000000/user-menu-male.png"/></NavLink>
                : <IconAuth />
            }
        </div>
        <div className={s.seach_container}><Seach /></div>

    </div>)
}

export default Header;

