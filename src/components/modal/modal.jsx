import React from "react";
import s from "./modal.module.css";
import { tookModal,pageReg } from "../../store/appReducer";
import {useDispatch,useSelector}from "react-redux";
import Entrence from "../authorization/pageAuth/entrence";
import PageReg from "../authorization/pageReg/pageReg";

const Modal=()=>{
    const dispatch = useDispatch();
    const active = useSelector(state=>state.app.modal)
    const handelClickModal = ()=>{
        dispatch(tookModal())
        dispatch(pageReg())
    };
    const pageRegActiv = useSelector(state=>state.app.pageReg);
    console.log(active)
    return(
        <div className={s.modal} onClick={handelClickModal}>
            <div className={s.modal_content} onClick={e=>e.stopPropagation()}>
           { pageRegActiv ? <PageReg/> : <Entrence/>}
            </div>
        </div>
    )
}

export default Modal;