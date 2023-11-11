import './Tarifs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

const Tarifs = () => {
    return (
        <section className='tarifs'>
            <h3 className='tarifs-heading'>Наші тарифи</h3>
            <h4 className='tarifs-heading2'>Чому 90% учнів обирають заняття у міні-групах?</h4>
            <div className='tarif-wrapper'>
                <div className='tarif-card'>
                    <h5 className='tarif-heading'>Міні-групи</h5>
                    <p className='tarif-price'>150 грн. / 1 заняття</p>
                
                    <li className='tarif-list'>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Індивідуальний підхід</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Консультації з вчителями після робочих годин</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Перевірені роками вчителі</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Унікальні задачі для вирішення</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faXmark} /> Сучасне обладння та технології</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faXmark} /> Конкуретна робота в колективі</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faXmark} /> Пробні заняття</ul>
                    </li>

                    <div className='tarif-button'><input type="submit" name='tarif-submit' value="Обрати тариф" /></div>
                </div>
                <div className='tarif-card'>
                    <h5 className='tarif-heading'>Приватні заняття</h5>
                    <p className='tarif-price'>300 грн / 1 заняття</p>

                    <li className='tarif-list'>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Індивідуальний підхід</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Консультації з вчителями після робочих годин</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Перевірені роками вчителі</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Унікальні задачі для вирішення</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Сучасне обладння та технології</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Конкуретна робота в колективі</ul>
                        <ul className='tarif-list-item'><FontAwesomeIcon icon={faCheck} /> Пробні заняття</ul>
                    </li>

                    <div className='tarif-button'><input type="submit" name='tarif-submit' value="Обрати тариф" /></div>
                </div>
            </div>
        </section>
    )
}

export default Tarifs