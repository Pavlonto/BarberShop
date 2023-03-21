import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Burger.module.css"

type BurgerPropsType = {
    burgerMode: boolean
    setBurgerMode: (value: boolean) => void
}

function Burger(props: BurgerPropsType) {

    const onClickHandler = () => {
        props.setBurgerMode(!props.burgerMode)
    }

    return (
        <div className={props.burgerMode ? s.burger : ""}>
            <ul className={props.burgerMode ? s.burger__list : s.close}>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to="/about">О нас</NavLink>
                </li>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <NavLink to={'/special'} style={{color: "red"}}>Акции</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Burger