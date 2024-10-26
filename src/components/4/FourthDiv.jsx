import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./FourthDiv.css";
import store from '../img/appstore.png'
import play from '../img/google.png'
import app from "../img/mobileapp.png";

export default function FourthDiv() {
  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });

  const textProps = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000 },
  });
  const imageProps = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? "translateX(0)" : "translateX(50px)",
    config: { duration: 1300, delay: 200 },
  });

  return (
    <div className="fourth-div-container">
      <animated.div ref={textRef} style={textProps} className="text-container">
        <h1>Просто добавь Wi-Fi</h1>
        <p>
          Ко всем моделям кондиционеров бренда Coaxis можно подключить мобильное
          управление, установив Wi-Fi контроллер. Полный потенциал устройства
          раскрывается только с Wi-Fi контроллерами и бесплатным
          мобильным приложением Coaxis Comfort.
        </p>
        <div className="download-buttons">
          <img
            src={store}
            alt="App Store"
            style={{cursor:'pointer'}}
          />
          <span>Доступно в App Store</span>
          <img
            src={play}
            alt="Google Play"
            style={{cursor:'pointer'}}
          />
          <span>Доступно в Google Play</span>
        </div>
      </animated.div>

      <animated.div ref={imageRef} style={imageProps} className="image-container">
        <img src={app} alt="Mobile app screenshot" />
      </animated.div>
    </div>
  );
}
