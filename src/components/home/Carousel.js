'use client'

import React, { useState, useEffect } from 'react';
import styles from '../../app/Styles/Carousel.module.css'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slides = [
    { id: 1, image: '/assets/b1.jpg', width: 1920, height: 1080, title: 'DESARROLLO DE ARQUITECTOS', buttonText: 'MÁS PROYECTOS' }, 
    { id: 2, image: '/assets/background-2.png', width: 1920, height: 1080, title: 'HOLA MUNDO', buttonText: 'MÁS PROYECTOS' },
    { id: 3, image: '/assets/background-5.jpg', width: 1920, height: 1080, title: 'CASAS MODERNAS', buttonText: 'MÁS PROYECTOS' }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }; 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [currentSlide]); // Ejecuta el efecto cada vez que `currentSlide` cambia

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <Image src={slide.image} alt={`Slide ${slide.id}`} layout="fill" objectFit="cover" />
          <div className={styles.caption}>
            <h1>{slide.title}</h1>
            <button>{slide.buttonText}</button>
          </div>
        </div>
      ))}
      <button className={styles.prevBtn} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
