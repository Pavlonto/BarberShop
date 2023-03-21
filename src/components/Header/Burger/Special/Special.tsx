import React from "react";
import s from "./Special.module.css"

function Special() {
    return (
        <div className={s.special}>
            <h2 className={s.special__title}>Специальные предложения</h2>
            <div className={s.special__item}>
                <p className={s.special__p}>Приведи друга и постригитесь уже наконец.</p>
                <div className={s.item__date}>20.03.2023</div>
            </div>
        </div>
    )
}

export default Special