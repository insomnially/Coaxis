import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import image1 from "../img/condition2.png";
import image2 from "../img/image22.jpg.png";
import image3 from "../img/image24.jpg";
import image4 from "../img/image23.png";
import "./ThirdDiv.css";

export default function ThirdDiv() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  const animationProps1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000 },
  });
  const animationProps2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000, delay: 200 },
  });
  const animationProps3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000, delay: 400 },
  });
  const animationProps4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000, delay: 600 },
  });

  return (
    <div className="third-div">
      <div className="container">
        <animated.div ref={ref1} className="block first-block" style={animationProps1}>
          <div className="block-image" style={{ backgroundImage: `url(${image1})`, filter: 'brightness(50%)' }} />
          <div className="block-content">
            <h2>Делает воздух чистым и здоровым</h2>
            <p>Системы фильтрации помогают очистить воздух от пыли и аллергенов.</p>
          </div>
        </animated.div>

        <animated.div ref={ref2} className="block second-block" style={animationProps2}>
          <div className="block-image" style={{ backgroundImage: `url(${image2})`,backgroundPosition: 'bottom', filter: 'brightness(77%)' }} />
          <div className="block-content">
            <h2>Обеспечивает комфортный сон</h2>
            <p>Тихая работа кондиционера позволяет спать спокойно и комфортно.</p>
          </div>
        </animated.div>

        <animated.div ref={ref3} className="block third-block" style={animationProps3}>
          <div className="block-image" style={{ backgroundImage: `url(${image3})`, filter: 'brightness(77%)' }} />
          <div className="block-content3">
            <h2>Легко встраивается в любой интерьер</h2>
            <p>Современный дизайн позволяет гармонично вписаться в любой интерьер.</p>
          </div>
        </animated.div>

        <animated.div ref={ref4} className="block fourth-block" style={animationProps4}>
          <div className="block-image" style={{ backgroundImage: `url(${image4})`, filter: 'brightness(1%)' }} />
          <div className="block-content">
            <h2>Подходит для любых погодных условий</h2>
            <p>Кондиционер стабильно работает при сильной жаре и морозах, обеспечивая комфорт в любое время года.</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
