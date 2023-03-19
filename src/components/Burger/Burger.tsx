import React from "react";
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
                    <a href="#">О нас</a>
                </li>
                <li
                    className={s.list__item}
                    onClick={onClickHandler}
                >
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </div>
    )
}

export default Burger