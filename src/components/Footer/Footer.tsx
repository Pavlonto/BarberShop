import React from "react";
import s from "./Footer.module.css"


function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footer__social}>
                <div className={s.social__item}>
                    <a className={s.img + ' ' + s.tg} href="https://t.me/awe_2001" target={'_blank'}></a>
                </div>
                <div className={s.social__item}>
                    <div className={s.img + ' ' + s.vk}></div>
                </div>
                <div className={s.social__item}>
                    <div className={s.img + ' ' + s.inst}></div>
                </div>
            </div>
            <div className={s.footer__links}></div>
            <div className={s.footer__text}>
                <p style={{fontSize: "8px", marginBottom: "1px"}}>© Money Cure 2023</p>
            </div>
        </div>
    )
}

export default Footer