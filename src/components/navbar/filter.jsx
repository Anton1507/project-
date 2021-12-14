import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { fetchWork } from '../../store/async_action/work';
import s from './navbar.module.css';


const Filter = ()=>{
    const dispatch=useDispatch();
    const history = useHistory();
    const [stateFilt,setStateFilt]= useState({type:"Выберите тип работы",
                                             subject_cod:"Выберите предмет"  });

    const handelChange=(event)=>{
        
        let sss = event.target.getAttribute('name');
        
        const value = event.target.value;
        
        setStateFilt({...stateFilt,  [sss]:value})
    }
    const handelSubmit =(e)=>{ 
        e.preventDefault();
        console.log(stateFilt)
        history.push("/home")
        dispatch(fetchWork(stateFilt))
        
    }


    return <div>
        <form onSubmit={handelSubmit}>
            <select className={s.select} size="1" name="type" onChange={handelChange}>
                <option value="Выберите тип работы">Выберите тип работы</option>
                <option value="1">Курсовые</option>
                <option value="2">Рефераты</option>
                <option value="4">Эссе</option>
                <option value="6">Лабораторные</option>
                <option value="5">Научные статьи</option>
                <option value="7">Презентации</option>
                <option value="3">Тезисы</option>
            </select>
            <select className={s.select} size="1" name="subject_cod" onChange={handelChange}>
                <option value="Выберите предмет">Выберите предмет</option>
                <option value="21">Аграрное Право</option>
                <option value="22">Адвокатура</option>
                <option value="23">Административное Право</option>
                <option value="64">Админ судочинство</option>
                <option value="56">Военное право</option>

                <option value="24">Гражданский процесс</option>
                <option value="25">Гражданское право</option>
                <option value="26">ДПЗК</option>
                <option value="27">Держ.Буд</option>
                <option value="28">Европейське судочинство</option>
                <option value="29">Екологическое</option>
                <option value="59">Земельное</option>
                <option value="30">ИДПЗК</option>
                <option value="31">ИДПУ</option>
                <option value="32">История международного права</option>
                <option value="33">Конституционное</option>
                <option value="34">Криминалистика</option>
                <option value="35">Криминальное</option>
                <option value="62">Криминально-исполнительное</option>
                <option value="36">Криминальный процесс</option>
                <option value="37">Криминология</option>
                <option value="37">Логика</option>

                <option value="38">Маркейтинг</option>
                <option value="39">Медецинское право</option>
                <option value="40">Международное приватное право</option>
                <option value="41">Международное публичное право</option>
                <option value="42">Менеджмент</option>
                <option value="43">Митне</option>
                <option value="44">Муниципальное</option>
                <option value="58">Украинская культура</option>
                <option value="66">Налоговое</option>

                <option value="45">Научка по философии</option>
                <option value="46">ОСПО</option>
                <option value="60">ОПД</option>
                <option value="63">Психология</option>

                <option value="47">Податкове право</option>
                <option value="48">Право ЕС</option>
                <option value="49">Социология, политология</option>
                <option value="65">Семейное</option>

                <option value="50">ТГП</option>
                <option value="51">Трудовая</option>
                <option value="52">Финансовое</option>
                <option value="57">Философия</option>

                <option value="53">Хозяйственное</option>
                <option value="54">Экономика</option>
                <option value="55">Юридична психологія</option>
                
            </select>

           <input type="submit" value="Найти" className={s.filter_button}/>
        </form>
         
    </div>
}


export default Filter;