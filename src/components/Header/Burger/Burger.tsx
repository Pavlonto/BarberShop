import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Burger.module.css"

type BurgerPropsType = {
    burgerMode: boolean
    scroll: boolean
    setBurgerMode: (value: boolean) => void
    setScroll: (value: boolean) => void
}

function Burger(props: BurgerPropsType) {

    const onClickHandler = () => {
        props.setBurgerMode(!props.burgerMode)
        props.setScroll(!props.scroll)
    }

    return (
        <div className={props.burgerMode ? s.burger : ""}>
            {/* <div className={props.burgerMode ? s.burger__title : s.close}>
                <h1>Money Cure</h1>
            </div> */}
            <ul className={props.burgerMode ? s.burger__list : s.close}>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to="/BarberShop/about">О нас</NavLink>
                </li>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to="/BarberShop/contacts">Контакты</NavLink>
                </li>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to={'/BarberShop/special'} style={{color: "red"}}>Акции</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Burger