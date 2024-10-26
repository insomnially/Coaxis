import React, { useState } from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Photo1 from '../img/image1.png';
import Photo2 from '../img/image2.png';
import Photo3 from '../img/image3.png';
import Photo4 from '../img/image4.png';
import Photo5 from '../img/button.png';

// Импортируйте CSS файл
import './SecondDiv.css';

export default function SecondDiv() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.1 });

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        beforeChange: (current, next) => setActiveIndex(next),
        appendDots: dots => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
  
            }}>
                <ul style={{ margin: "0px", display: "flex", alignItems: "center" }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: activeIndex === i ? "20px" : "10px",
                    height: "10px",
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: "5px",
                    transition: 'width 0.4s ease, border-radius 0.3s ease',
                    cursor: "pointer",
                }}
            ></div>
        )
    };

    const slides = [
        {
            image: Photo1,
            text: 'Кондиционеры Coaxis разработаны с использованием новейших технологий, которые минимизируют потребление энергии, снижая счета за электричество и делая их более экологичными.'
        },
        {
            image: Photo2,
            text: "Кондиционеры Coaxis работают практически бесшумно, создавая комфортные условия для сна, работы и отдыха."
        },
        {
            image: Photo3,
            text: "Кондиционеры Coaxis оборудованы инверторными компрессорами A++, которые оптимизируют потребление электроэнергии."
        },
        {
            image: Photo4,
            text: "Кондиционеры Coaxis оснащены технологией защиты от перепадов напряжения, что обеспечивает их надежную работу в любых условиях."
        },
        {
            image: Photo5,
            text: "С помощью переключателя вы можете контролировать кондиционер, тем самым настраивая температуру."
        }
    ];

    return (
        <div className="second-div-container">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                className="second-div-title"
            >
                Принципы компании Coaxis
            </motion.h1>

            <div ref={ref} className="second-div-slider">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="second-div-motion"
                >
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <div className="second-div-slide" style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}>
                                    <div className="second-div-slide-text">
                                        {slide.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
}
