import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"

type HeaderProps = {
    burgerMode: boolean
    scroll: boolean
    setBurgerMode: (value: boolean) => void
    setScroll: (value: boolean) => void
}

function Header(props: HeaderProps) {
    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <NavLink to='/BarberShop/main' className={s.logo__link}></NavLink>
                </div>
                <div className={s.header__title}>Money Cure</div>
                <nav className={s.header__nav}>
                    <div className={s.nav__item}>
                        <NavLink to='/BarberShop/about'>О нас</NavLink>
                    </div>
                    <div className={s.nav__item}>
                        <NavLink to='/BarberShop/price'>Прайс</NavLink>
                    </div>
                    <div className={s.nav__item}>
                        <NavLink to='/BarberShop/contacts'>Контакты</NavLink>
                    </div>
                    <div className={s.nav__item}>
                        <NavLink to='/BarberShop/special'>Акции</NavLink>
                    </div>
                </nav>
                <div className={s.header__menu}>
                    <div
                        className={!props.burgerMode
                            ? s.menu__icon_close
                            : s.menu__icon_open
                        }
                        onClick={() => {
                            props.setBurgerMode(!props.burgerMode)
                            props.setScroll(!props.scroll)
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