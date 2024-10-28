import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import condition from '../img/condition.png';
import mainimage2 from '../img/mainimage2.png';
import './MainDiv.css';

export default function MainDiv() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const imageProps = useSpring({ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateX(0)' : 'translateX(-50px)', config: { duration: 1200 } });
  const descriptionProps = useSpring({ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(50px)', config: { duration: 1200, delay: 500 } });

  const mainImageProps = useSpring({ opacity: inView3 ? 1 : 0, transform: inView3 ? 'translateX(0)' : 'translateX(-50px)', config: { duration: 1200, delay: 500 } });

  const titleAnimations = Array.from({ length: 4 }).map((_, index) =>
    useSpring({
      opacity: inView2 ? 1 : 0,
      transform: inView2 ? 'translateY(0)' : 'translateY(30px)',
      config: { duration: 800, delay: index * 200 },
    })
  );

  const paragraphAnimations = Array.from({ length: 4 }).map((_, index) =>
    useSpring({
      opacity: inView2 ? 1 : 0,
      transform: inView2 ? 'translateY(0)' : 'translateY(20px)',
      config: { duration: 800, delay: index * 200 + 100 },
    })
  );

  return (
    <>
      <div className="containermain1">
        <animated.div ref={ref1} style={imageProps} className="mainimage1">
          <img src={condition} alt="condition" className="condition-image" />
        </animated.div>
        <animated.div style={descriptionProps} className="description1">
          <h1 className="description-title">Кондиционер Coaxis Airflow Pro</h1>
          <animated.p style={descriptionProps} className="description-text">
            Кондиционер Coaxis AirFlow Pro — это находка для тех, кто хочет объединить в одном устройстве стиль, мощность и
            современные технологии. Эта модель отличается ультрасовременным дизайном с матовым металлическим корпусом и почти
            бесшумной работой, что делает её идеальной для спальни или офиса.
          </animated.p>
        </animated.div>
      </div>

      <div className="inforow" ref={ref2}>
        {[
          {
            emoji: '🔋',
            title: 'Высокая Энергоэффективность',
            text: 'Инверторный компрессор A++ с оптимизированным энергопотреблением. Быстрое охлаждение и поддержание заданной температуры.',
          },
          {
            emoji: '🌬️',
            title: 'Идеальная Тишина',
            text: 'Технология Silent Mode снижает уровень шума до 19 дБ — тише шепота. Создает комфортные условия для сна и отдыха.',
          },
          {
            emoji: '🌡️',
            title: 'Интеллектуальная Управляемость',
            text: 'Wi-Fi управление через приложение, позволяющее включать, регулировать и выключать кондиционер из любой точки.',
          },
          {
            emoji: '⚙️',
            title: 'Надежность и Долговечность',
            text: 'Технология защиты от перепадов напряжения и автоматическое восстановление параметров для безотказной работы в любых условиях.',
          },
        ].map(({ emoji, title, text }, index) => (
          <div key={index} className="info-item">
            <animated.h1 style={titleAnimations[index]} className="info-title">
              {emoji} {title}
            </animated.h1>
            <animated.p style={paragraphAnimations[index]} className="info-text">
              {text}
            </animated.p>
          </div>
        ))}
      </div>

      <div className="containermain2">
        <animated.div ref={ref3} style={mainImageProps} className="mainimage2">
            <img src={mainimage2} alt="condition" className="mainimage2-img" />
            <p className="mainimage2-text">
              Coaxis — это сочетание отличного качества и передовых технологий
            </p>
        </animated.div>
      </div>
    </>
  );
}
