import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './seach_style.module.css';
import { fetchSeachWork } from '../../../store/async_action/work';
const Seach = () => {
    const dispatch = useDispatch();
    const [stateSeach, setStateSeach] = useState('');

    useEffect(()=>{
        
        var timerId =setTimeout(()=>{dispatch(fetchSeachWork(stateSeach))},5000)
        return ()=>{clearTimeout(timerId)}
    },[stateSeach]);
    const handelChange = (event) => {
        setStateSeach(event.target.value)
    }
    return (
        <input className={s.seach} onChange={handelChange} value={stateSeach} placeholder="Найти работу"></input>
    )
}

export default Seach;