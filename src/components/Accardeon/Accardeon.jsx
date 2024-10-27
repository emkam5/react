import { AccardeonItem } from "./AccardeonItem/AccardeonItem";
import s from  './Accardeon.module.css';

export function Accardeon() {
    return(
        <div className={s.accardeon}>
            <AccardeonItem title='Преимущество' text='БМВ олицетворяет гармонию между мощностью и элегантностью, предлагая водителям уникальное сочетание динамики и комфорта на каждом километре пути.' />
            <AccardeonItem title='О нас' text='BMW — это немецкий производитель автомобилей, олицетворяющий высокие технологии, инновации и спортивный дух. Основанная в 1916 году, компания начала свою деятельность с производства авиационных двигателей и постепенно перешла к созданию автомобилей и мотоциклов.' />
            <AccardeonItem title='Вопрсы и ответы' text='-Пока' />
        </div>
    )
}