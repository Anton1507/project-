import React from "react";
import s from './navbar.module.css';


import Filter from "./filter";




const Navbar = () => {
    return (<div className={s.navbar}>
        <Filter />
    </div>)
}

export default Navbar;