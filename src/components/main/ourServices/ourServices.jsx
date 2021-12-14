import React from "react";
import s from './ourServices.module.css';
import design from './img/design.svg';
import gear from './img/gear.svg';
import strategy from './img/strategy.svg';
import target from './img/target.svg';
const OutServices = () => {
    return (
        <div className={s.blockAllserviced} id="allserviced">
            <h2>Популярные услуги</h2>
            <div className={s.blockServiced}>

                <div className={s.blockSrOne}>
                    <img src={target} alt="target"/>
                    <p>Диплом на заказ</p>
                    <p>Сроки: от 30-ти дней</p>
                    <p>Стоимость </p>
                    <p>ОТ 4000 ГРН</p>
                </div>
                <div className={s.blockSrTwo}>
                    <img src={strategy} alt="#"/>
                    <p>Курсовая работа</p>
                    <p>От 7 дней </p>
                    <p>Стоимость </p>
                    <p>от 470 грн</p>

                </div>
                <div className={s.blockSrThree}>
                    <img src={design} alt="#"/>
                    <p>Отчет по практике</p>
                    <p>Сроки от 2 дней </p>
                    <p>стоимость </p>
                    <p>от 300грн </p>


                </div>
                <div className={s.blockSrFour}>
                    <img src={gear} alt="gear"/>
                    <p>Статья для студента </p>
                    <p>Сроки от 2 дней</p>
                    <p> Стоимость </p>
                    <p>от 250 грн</p>

                </div>
            </div>
        </div>
    )
}

export default OutServices;