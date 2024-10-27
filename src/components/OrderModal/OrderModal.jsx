import Modal from "react-modal"
import s from "./OrderModal.module.css"


export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false)
    }
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <input type="text" className="inp"  placeholder="Ваше почта"/>
                <input type="text" className="inp"  placeholder="Количество"/>
                <div className={s.block}>
                    <button onClick={closeModal} className="btn2">Закрыть</button>
                    <button className="btn">Заказать</button>
                </div>
            </Modal>
        </>
    )
}