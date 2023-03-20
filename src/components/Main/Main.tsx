import React, { useState } from "react";
import s from "./Main.module.css"


function Main() {

    const [button, setButton] = useState(false)

    const onClickHandler = () => {
        setButton(!button)
    }

    return (
        <div className={s.main}>
            <section className={s.image}>
                <div className={button ? s.blur : ""}>
                    {
                        button &&
                        <div>
                            <div className={s.blur_off} onClick={onClickHandler}>x</div>
                            <div className={s.blur_text}>
                                <h2 className={s.text_title}>
                                    Вас приветствует место красоты "Money Cure"
                                </h2>
                                <p className={s.text_p}>

                                </p>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <div className={s.button} onClick={onClickHandler}>
                {!button && <button className={s.btn}>
                    Узнать больше
                </button>}
            </div>
        </div>
    )
}

export default Main