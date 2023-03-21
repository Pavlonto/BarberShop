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
                            <div className={s.blur_button} onClick={onClickHandler}>x</div>
                            <div className={s.blur_text}>
                                <h2 className={s.text_title}>
                                    Вас приветствует место красоты <br/>"Money Cure"
                                </h2>
                                <p className={s.text_p}>
                                    У нас вы можете подстричься, сделать маникюр,
                                    а также <br/> приятно провести время с нашими специалистами.
                                </p>
                                <div className={s.text_to_services}>
                                    <p>Ниже представлены разновидности услуг</p>
                                    <svg fill="#FFFFFF" width="100px" height="100px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path> </g></svg>
                                </div>
                            </div>
                        </>
                    }                    
                </div>
                {!button && <div className={s.button} onClick={onClickHandler}>
                    Узнать больше
                </div>}             
            </section>
            <section className={s.services}>
                <div className={s.service__slider}>
                    <div className={s.buttons}>
                        <div className={s.button_prev}
                            onClick={setOffsetHandlerMinus}
                        >
                            <svg fill="#FFFFFF" width="50px" height="50px" viewBox="-0.64 -0.64 33.28 33.28" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path> </g></svg>
                        </div>
                        <div className={s.button_next}
                            onClick={setOffsetHandlerPlus}
                        >
                            <svg fill="#FFFFFF" width="50px" height="50px" viewBox="-0.64 -0.64 33.28 33.28" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path> </g></svg>
                        </div>
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