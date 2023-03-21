import React, { useState } from "react";
import s from "./Main.module.css"


function Main() {

    const [button, setButton] = useState(false)
    const [offset, setOffset] = useState(0)

    const onClickHandler = () => {
        setButton(!button)
    }
    const setOffsetHandlerPlus = () => {
        if (!(offset > 2000)) {
            setOffset(offset + 375)
        }
        if (offset > 700) {
            setOffset(0)
        }
    }
    const setOffsetHandlerMinus = () => {
        if (!(offset < 374)) {
            setOffset(offset - 375)
        }
        if (offset < 1) {
            setOffset(750)
        }
    }

    return (
        <main className={s.main}>
            <section className={s.image}>
                <div className={button ? s.blur : ""}>
                    {
                        button &&
                        <>
                            <div className={s.blur_off} onClick={onClickHandler}>x</div>
                            <div className={s.blur_text}>
                                <h2 className={s.text_title}>
                                    Вас приветствует место красоты "Money Cure"
                                </h2>
                                <p className={s.text_p}>
                                    У нас вы можете подстричься, сделать маникюр,
                                    а также приятно провести время с нашими специалистами.
                                </p>
                                <div className={s.text_to_services}>
                                    <p>Ниже представлены разновидности услуг</p>
                                    <svg fill="#FFFFFF" width="100px" height="100px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path> </g></svg>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className={s.button}>
                    {!button && <button className={s.btn} onClick={onClickHandler}>
                        Узнать больше
                    </button>}
                </div>
            </section>
            <section className={s.services}>
                <div className={s.service__slider}>
                    <div className={s.buttons}>
                        <div className={s.button_prev}
                            onClick={setOffsetHandlerMinus}
                        >
                            <svg fill="#FFFFFF" width="50px" height="50px" viewBox="-0.64 -0.64 33.28 33.28" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path> </g></svg>
                        </div>
                        <div className={s.button_next}
                            onClick={setOffsetHandlerPlus}
                        >
<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" fill="#FFF"></path> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#FFF" stroke-width="2"></path> <path d="M16 12L8 12" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                        </div>
                    </div>
                    <div className={s.slider_line} style={{ right: offset + "px" }}>
                        <div className={s.slider1}>
                            <p className={s.slider__p}>
                                Профессиональная стрижка в любом стиле с использованием профилированных инструментов и веществ.
                            </p>
                        </div>
                        <div className={s.slider2}>
                            <p className={s.slider__p}>
                                Окраска волос высококачественной химией.
                            </p>
                        </div>
                        <div className={s.slider3}>
                            <p className={s.slider__p}>
                                Все виды маникюра.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Main