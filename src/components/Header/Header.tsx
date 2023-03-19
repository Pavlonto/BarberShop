import React from "react";
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
                    <a href="#" className={s.logo__link}></a>
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