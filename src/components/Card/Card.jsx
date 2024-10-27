import { Link } from 'react-router-dom';
import s from './Card.module.css';
import { useState } from 'react';
import { OrderModal } from '../OrderModal/OrderModal';


export function Card({ id, image, name, price, count }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }
    return (
        <>
            <div className={s.tovar}>
                <img src={image} className={s.image}></img>
                <div className={s.block1}>
                    <p className={s.name}>{name}</p>
                    <p className={s.count}>Кол-во: {count}</p>
                </div>
                <div className={s.block}>
                    <h3 className={s.price}>{price} ₽</h3>
                    {
                        count > '0' ?
                            <Link className={s.btn} to={`${id}`}>Подробнее</Link>
                            :
                            <button onClick={showModal} className={s.btn}>Заказать</button>
                    }
                </div>
                <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
            </div>
        </>
    )
}

