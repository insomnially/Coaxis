import React from "react";
import Header from "../../Header/Header";
import "./Catalog.css";
import cond from'../img/condition.png'
import cond2 from'../img/cond2.png'
import { FaVolumeMute, FaFan, FaBatteryFull, FaMobileAlt, FaFilter, FaLeaf, FaLightbulb, FaWifi, FaSnowflake, FaShieldAlt, FaHandHoldingWater, FaHome, FaWind, FaTemperatureHigh, FaRegLightbulb } from 'react-icons/fa';
import Footer from "../../Footer/Footer";

const products = [
    {
      id: 1,
      title: "Сплит-система Coaxis, серия A Premium",
      features: ["Бесшумная работа", "Инверторный компрессор", "Энергоэффективность A++"],
      isNew: true,
      image: cond,
    },
    {
      id: 2,
      title: "Бытовая сплит-система Coaxis, серия B Smart",
      features: ["Управление через приложение", "Фильтр с ионами серебра", "Хладагент R-32"],
      isNew: false,
      image: cond2,
    },
    {
      id: 3,
      title: "Мульти-сплит-система Coaxis, серия C Advanced",
      features: ["От 2 до 6 внутренних блоков", "Автоочистка", "Экологичный хладагент R-32"],
      isNew: false,
      image: cond2,
    },
    {
      id: 4,
      title: "Кондиционер Coaxis, серия D Comfort",
      features: ["Функция IFeel", "Быстрое охлаждение", "Экологичный хладагент R-410A"],
      isNew: true,
      image: cond,
    },
    {
      id: 5,
      title: "Сплит-система Coaxis, серия E Eco",
      features: ["Энергосберегающий режим", "Антибактериальный фильтр", "Тихий режим"],
      isNew: false,
      image: cond2,
    },
    {
      id: 6,
      title: "Мульти-сплит-система Coaxis, серия F Pro",
      features: ["Совместимость с умным домом", "Инверторный компрессор", "Многоступенчатый фильтр"],
      isNew: true,
      image: cond,
    },
  ];
  

  const featureIcons = {
    "Бесшумная работа": <FaVolumeMute style={{ color: '#4CAF50' }} />,
    "Инверторный компрессор": <FaFan style={{ color: '#2196F3' }} />,
    "Энергоэффективность A++": <FaBatteryFull style={{ color: '#FFEB3B' }} />,
    "Управление через приложение": <FaMobileAlt style={{ color: '#FF5722' }} />,
    "Фильтр с ионами серебра": <FaFilter style={{ color: '#9C27B0' }} />,
    "Хладагент R-32": <FaLeaf style={{ color: '#8BC34A' }} />,
    "От 2 до 6 внутренних блоков": <FaLightbulb style={{ color: '#FFC107' }} />,
    "Автоочистка": <FaFan style={{ color: '#00BCD4' }} />,
    "Функция IFeel": <FaTemperatureHigh style={{ color: '#E91E63' }} />,
    "Быстрое охлаждение": <FaSnowflake style={{ color: '#00BFFF' }} />,
    "Экологичный хладагент R-410A": <FaLeaf style={{ color: '#4CAF50' }} />,
    "Энергосберегающий режим": <FaRegLightbulb style={{ color: '#FFEB3B' }} />,
    "Антибактериальный фильтр": <FaShieldAlt style={{ color: '#9E9E9E' }} />,
    "Тихий режим": <FaVolumeMute style={{ color: '#607D8B' }} />,
    "Совместимость с умным домом": <FaHome style={{ color: '#673AB7' }} />,
    "Многоступенчатый фильтр": <FaFilter style={{ color: '#FF9800' }} />,
    "Wi-Fi управление": <FaWifi style={{ color: '#FF9800' }} />,
};
  
  export default function Catalog() {
    return (
      <>
        <Header />
        <h1 className="condinfo">Кондиционеры Coaxis</h1>
        <div className="catalog">
          {products.map((product) => (
            <div className="catalog-card" key={product.id}>
              {product.isNew && <div className="new-badge">Новинка</div>}
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature">
                    <span className="feature-icon">
                      {featureIcons[feature] || <FaLeaf />} {/* Default icon if no match */}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Footer/>
      </>
    );
  }