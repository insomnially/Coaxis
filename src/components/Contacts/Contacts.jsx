import React from "react";
import { FaTelegramPlane, FaGithub, FaYoutube, FaTwitch } from "react-icons/fa";
import "./Contacts.css";
import Footer from "../../Footer/Footer";

export default function ContactInfo() {
  return (

    <div className="containercontacts">
      <div className="contact1">
        <h1 style={{ fontWeight: 500 }}>
          Эксклюзивный дистрибьютор Coaxis на территории РФ - ООО «Coaxis INC»
        </h1>
        <p style={{ paddingBottom: 20 }}>
          Coaxis специализируется на продаже и поддержке высококачественных систем кондиционирования для дома и бизнеса, предлагая инновационные и энергосберегающие решения.
        </p>
      </div>
      <div className="contact2">
        <h1 style={{ fontWeight: 500 }}>Контакты</h1>
        
        <p style={{ paddingBottom: 10 }}><a href="tel:+79152775792">Телефон: +7 (915) 277-57-92</a> <br />
          <small>Звонки принимаются в рабочие часы.</small>
        </p>
        
        <p style={{ paddingBottom: 10 }}>
          Email: <a href="mailto:info@coaxis.ru">info@coaxis.ru</a> <br />
          <small>Свяжитесь с нами по электронной почте для получения информации о продуктах и сотрудничестве.</small>
        </p>
        
        <p style={{ paddingBottom: 10 }}>
          Адрес: <a href="https://maps.google.com/?q=Москва, ул. Комфортная, 10" target="_blank" rel="noopener noreferrer">
            Москва, ул. Комфортная, 10
          </a> <br />
          <small>Найдите нас на карте и приходите в наш офис.</small>
        </p>
        
        <p style={{ paddingBottom: 10 }}>
          Веб-сайт: <a href="https://insomnially.github.io/Coaxis/">https://insomnially.github.io/Coaxis/</a> <br />
          <small>Узнайте больше о наших продуктах и услугах на официальном сайте.</small>
        </p>

        <h1 style={{ fontWeight:1, paddingTop: 20 }}>Рабочее время</h1>
        <p style={{ paddingBottom: 10 }}>
          Понедельник - Пятница: 9:00 - 18:00 <br />
          Суббота - Воскресенье: выходной
        </p>
        
        <h1 style={{ fontWeight:1, paddingTop: 20 }}>Поддержка клиентов</h1>
        <p style={{ paddingBottom: 10 }}>
          Наша команда поддержки готова ответить на ваши вопросы по продукции,<br></br> установке и техническому обслуживанию. Мы также предоставляем консультации<br></br> по выбору наиболее подходящей системы кондиционирования.
        </p>

        <p style={{ paddingBottom: 20 }}>Наши социальные сети:</p>
        <div className="iconscont">
          <a href="https://t.me/your-telegram-handle" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegramPlane style={{ color: "#0088cc", fontSize: "24px", marginRight: "10px" }} />
          </a>
          <a href="https://github.com/your-github-handle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub style={{ color: "#333", fontSize: "24px", marginRight: "10px" }} />
          </a>
          <a href="https://youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube style={{ color: "#FF0000", fontSize: "24px" }} />
          </a>
          <a href="https://twitch.tv/" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
            <FaTwitch style={{ color: "#FF0000", fontSize: "24px" }} />
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
