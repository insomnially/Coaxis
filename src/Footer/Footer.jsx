import React from 'react';
import './Footer.css';
import { FaYoutube, FaGithub, FaTwitch, FaTelegram } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {

  const hideAboutLinkPaths = ['/Coaxis/catalog', '/Coaxis/reviews', '/Coaxis/contacts'];
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div style={{minWidth:'30%'}} className="footer-section logo-section">
          <h1 style={{textShadow: '0 3px 10px rgba(0, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .5)', color:'white',fontSize:'35px',position:'relative', top:'0'}}>Coaxis</h1>
          <p>Мы делаем ваш дом комфортнее с инновационными кондиционерами и умными решениями.</p>
        </div>

        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li><a href="/Coaxis/catalog">Каталог</a></li>
            {!hideAboutLinkPaths.includes(location.pathname) && (
                            <li className='link-item'>
                                <ScrollLink to="second-div-container" offset={85} spy={true} smooth={true} duration={150}>
                                    О нас
                                </ScrollLink>
                            </li>
                        )}
            <li><a href="/Coaxis/reviews">Отзывы</a></li>
            <li><a href="/Coaxis/contacts">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +7 (915) 277-57-92</p>
          <p>Email: info@coaxis.ru</p>
          <p>Адрес: Москва, ул. Комфортная, 10</p>
        </div>

        <div className="footer-section social-media-section">
          <h3>Мы в соцсетях</h3>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://github.com/insomnially" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
              <FaTwitch />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coaxis. Все права защищены.</p>
      </div>
    </footer>
  );
}
