import { useState } from "react";
import s from  './AccardeonItem.module.css';

export function AccardeonItem({ title, text }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={s.item}>
            <div className={s.title} onClick={() => setIsActive(!isActive)}>
                <p>{title}</p>
                <div className="arrow">
                    {
                        isActive ? '-' : '+'
                    }
                </div>
            </div>
            {
                isActive &&
                <div className={s.text}>{text}</div>
            }
        </div>
    )
}