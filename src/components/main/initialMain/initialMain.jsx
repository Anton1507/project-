
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Navbar from "../../navbar/navbar";

import s from './main.module.css';


const Card = (props) => {
   
    const history = useHistory();
    const handelClick =(id)=>{
        history.push(`/cart/${id}`);
        console.log(id)
    }

    return (
         <div className={s.card} >
            {/* <p>Тип работы:{props.item.typeWork}</p> */}
            <p>Предмет: {props.item.subject_name}</p>
            <p>Название работы: {props.item.name_work}</p>
            <p>Количество страниц: {props.item.numbOfPage}</p>
            <p>Когда была сделана: {props.item.wasDone}</p>
            <p>Количество источников: {props.item.numbOfSources}</p>
            {/* <p>План:{props.item.plan}</p> */}
            <button  className={s.button} onClick={()=>handelClick(props.item._id)}>Посмотреть подробнее </button>
        </div>
    )
}
const InitialMain = () => {
    const arrCart = useSelector(state => state.work.work);
    const [stateCart, setStateCart] = useState([]);
    useEffect(() => {
        setStateCart(arrCart);

    }, [arrCart]);
    return <>
        <div className={s.main_contener}>
            <div className={s.main_navbar}><Navbar /></div>
            <div className={s.main_content}>
                <div className={s.main}>

                    {stateCart.map(item => <Card item={item} />)}



                </div>
            </div>
        </div>
    </>
}

export default InitialMain;