import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"

type HeaderProps = {
    burgerMode: boolean
    setBurgerMode: (value: boolean) => void
}

function Header(props: HeaderProps) {
    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <NavLink to='/main' className={s.logo__link}></NavLink>
                </div>
                <div className={s.header__menu}>
                    <div
                        className={!props.burgerMode
                            ? s.menu__icon_close
                            : s.menu__icon_open
                        }
                        onClick={() => {
                            props.setBurgerMode(!props.burgerMode)
                        }}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header