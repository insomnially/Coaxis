import './Header.css';
import * as React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
    const location = useLocation();
    const hideAboutLinkPaths = ['/Coaxis/catalog', '/Coaxis/reviews', '/Coaxis/contacts'];
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        airConditionerType: '',
        installationDate: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setShowSuccessMessage(false); // Сбросить сообщение при открытии модального окна
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', phone: '', airConditionerType: '', installationDate: '' });
        setShowSuccessMessage(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлено:', formData); // Отправка данных на сервер
        setShowSuccessMessage(true); // Показать сообщение об успехе
    };

    return (
        <>
            <header className='header'>
                <nav className='navheader'>
                    <ul className='ulheader'>
                        <li className='li1'>
                            <Link to='/Coaxis/'>Coaxis</Link>
                        </li>
                        <li className='link-item'>
                            <Link to='/Coaxis/catalog'>Каталог</Link>
                        </li>
                        {!hideAboutLinkPaths.includes(location.pathname) && (
                            <li className='link-item'>
                                <ScrollLink to="second-div-container" offset={85} spy={true} smooth={true} duration={150}>
                                    О нас
                                </ScrollLink>
                            </li>
                        )}
                        <li className='link-item'>
                            <Link to='/Coaxis/reviews'>Отзывы</Link>
                        </li>
                        <li className='link-item'>
                            <Link to='/Coaxis/contacts'>Контакты</Link>
                        </li>
                        <div className='headerbutton' onClick={openModal}>
                            Заказать <span className='setup'>установку</span>
                        </div>
                    </ul>
                </nav>
            </header>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <h2>Заказать установку кондиционера</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Имя:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Введите ваше имя"
                                    className="input-field"
                                />
                            </label>
                            <label>
                                Номер телефона:
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Введите ваш номер телефона"
                                    className="input-field"
                                />
                            </label>
                            <label>
                                Тип кондиционера:
                                <select
                                    name="airConditionerType"
                                    value={formData.airConditionerType}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                >
                                    <option value="">Выберите тип</option>
                                    <option value="сплит-система">Сплит-система</option>
                                    <option value="оконный">Оконный</option>
                                    <option value="мобильный">Мобильный</option>
                                </select>
                            </label>
                            <label>
                                Дата установки:
                                <input
                                    type="date"
                                    name="installationDate"
                                    value={formData.installationDate}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                />
                            </label>
                            <button type="submit" className="submit-button">Отправить заявку</button>
                        </form>
                        {showSuccessMessage && (
                            <p className="success-message">Спасибо! Ваш запрос на установку кондиционера принят.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
