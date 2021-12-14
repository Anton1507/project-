import React,{useState} from "react";
import { useDispatch } from "react-redux";
import s from "./pageRegStyle.module.css";
import { fetchRegFunc } from "../../../store/async_action/work";

const PageReg = ()=>{
    const dispatch = useDispatch();
    const [statePass,setStatePass]=useState(false);
    const [stateInp, setStateInp] = useState({
        name:"",
        surname:"",
        email:"",
        nikName:"",
        tel:"",
        password: "",
    });
    const submitHandel = (event) => {
        event.preventDefault();
        if (!stateInp.email || !stateInp.password) {
            return alert("Пароль или Email неуказанно")
        };
        console.log(stateInp);
        dispatch(fetchRegFunc(stateInp))
    }

    const handelChange = (event) => {
        setStateInp(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }
    const handelChangePass = (event)=>{
       if(event.target.value == stateInp.password){
           setStatePass(!statePass)
       }
    }
    return(
        <form className={s.form}>
            <div className={s.form_block1}>
                <label htmlFor="nameInRegForm">Имя</label>
                <input type="text" id="nameInRegForm" name="name" onChange={handelChange}  value={stateInp.name}></input>
            </div>
            <div className={s.form_block2}>
                <label  htmlFor="surnameInRegForm">Фамилия</label>
                <input type="text" id="surnameInRegForm" name="surname" onChange={handelChange}  value={stateInp.surname}></input>
            </div>
            <div className={s.form_block3}>
                <label  htmlFor="emailInRegForm">Email</label>
                <input type="text" id="emailInRegForm" name="email" onChange={handelChange}  value={stateInp.email}></input>
            </div>
            <div className={s.form_block4}>
                <label  htmlFor="nameTelgInRegForm">Ник в Telegram</label>
                <input type="text" id="nameTelgInRegForm" name="nikName" onChange={handelChange}  value={stateInp.nikName}></input>
            </div>
            <div className={s.form_block5}>
                <label  htmlFor="telNumbInRegForm">Номер телефона</label>
                <input type="tel" id="telNumbInRegForm" name="tel" onChange={handelChange}  value={stateInp.tel}></input>
            </div>
            <div className={s.form_block6}>
                <label  htmlFor="passOneInRegForm">Пароль</label>
                <input type="password" id="passOneInRegForm" name="password" onChange={handelChange}  value={stateInp.password}></input>
            </div>
            <div className={s.form_block7}>
                <label htmlFor="passTwoInRegForm">Повторите пароль</label>
                <input type="password" onChange={handelChangePass} id="passTwoInRegForm"></input>
            </div>
            {!statePass ? <button className={s.notActiv_button} onClick={e=>e.preventDefault()} >Зарег</button>:
                <button type="submit" className={s.button_submit} onClick={submitHandel}>Зарегистрироваться</button>}
        </form>
    )
}

export default PageReg;
