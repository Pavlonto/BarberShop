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
                            <div className={s.item}>Пикси: от <span>***</span> рублей</div>
                            <div className={s.item}>Короткое каре: от <span>***</span> рублей</div>
                            <div className={s.item}>Каре: от <span>***</span> рублей</div>
                            <div className={s.item}>Лесенка: от <span>***</span> рублей</div>
                        </div>
                    </div>
                    <div className={s.item__block}>
                        <h3 className={s.block__title}>На длинные волосы:</h3>
                        <div className={s.items}>
                            <div className={s.item}>Лисий хвост: от <span>***</span> рублей</div>
                            <div className={s.item}>Длинная лесенка: от <span>***</span> рублей</div>
                            <div className={s.item}>Рваная стрижка: от <span>***</span> рублей</div>
                            <div className={s.item}>Голливуд: от <span>***</span> рублей</div>
                        </div>
                    </div>
                </div>
                <div className={s.price__item}>
                    <div className={s.item__title}>Маникюр</div>
                    <div className={s.item__block}>
                        <div className={s.items}>
                            <div className={s.item}>Обрезной: от <span>500</span> рублей</div>
                            <div className={s.item}>Аппаратный: от <span>700</span> рублей</div>
                            <div className={s.item}>Комбинированный: от <span>***</span> рублей</div>
                            <div className={s.item}>Наращиваение: от <span>***</span> рублей</div>
                            <div className={s.item}>Укрепление: от <span>***</span> рублей</div>
                            <div className={s.item}>Коррекция: от <span>***</span> рублей</div>
                            <div className={s.item}>Дизайн: от <span>***</span> рублей</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price