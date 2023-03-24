import React from "react";
import s from './Price.module.css'

function Price() {
    return (
        <div className={s.price}>
            <h2 className={s.price__title}>Стоимость услуг</h2>
            <div className={s.price__items}>
                <div className={s.price__item}>
                    <div className={s.item__title}>Стрижки</div>
                    <div className={s.item__block}>
                        <h3 className={s.block__title}>На короткие волосы:</h3>
                        <div className={s.items}>
                            <div className={s.item}>Пикси</div>
                            <div className={s.item}>Короткое каре</div>
                            <div className={s.item}>Каре</div>
                            <div className={s.item}>Лесенка</div>
                        </div>
                    </div>
                    <div className={s.item__block}>
                        <h3 className={s.block__title}>На длинные волосы:</h3>
                        <div className={s.items}>
                            <div className={s.item}>Лисий хвост</div>
                            <div className={s.item}>Длинная лесенка</div>
                            <div className={s.item}>Рваная стрижка</div>
                            <div className={s.item}>Голливуд</div>
                        </div>
                    </div>
                </div>
                <div className={s.price__item}>
                    <div className={s.item__title}>Маникюр</div>
                    <div className={s.items}>
                        <div className={s.item}>Европейский</div>
                        <div className={s.item}>Аппаратный</div>
                        <div className={s.item}>Обрезной</div>
                        <div className={s.item}>Комбинированный</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price