import React, { useState } from 'react';
import Section from './Section';
import './GalleryCarousel.css';

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "../static/1.jpg",
    "../static/2.jpg",
    "../static/3.jpg",
    "../static/4.jpg",
    "../static/5.jpg",
    "../static/6.jpg"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section id="carrusel">
      <div className="gallery-title">Galería</div>
      <div className="gallery-carousel">
        <div className="items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div className="item" key={index} onDoubleClick={() => openModal(src)}>
              <img src={src} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="controls">
          <button className="control prev" onClick={goToPrevious}>❮</button>
          <button className="control next" onClick={goToNext}>❯</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </Section>
  );
};

export default GalleryCarousel;
