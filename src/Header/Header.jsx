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
        setShowSuccessMessage(false);
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

    const sendToTelegram = async (data) => {
        const botToken = '8159457466:AAGJyfJ__07lFmnh0TW73GtGTzjdnMCpdCM';
        const chatId = '1333493563';
        const message = `
            Новая заявка на установку кондиционера:
            Имя: ${data.name}
            Телефон: ${data.phone}
            Тип кондиционера: ${data.airConditionerType}
            Дата установки: ${data.installationDate}
        `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message })
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendToTelegram(formData);
        setShowSuccessMessage(true);
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