import React from 'react';
import Section from './Section';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Section id="nosotros" title="Sobre Nosotros">
      <img src="../static/foto_perfil.png" alt="Nuestro equipo" className="profile-image" />
      <p>Somos un equipo de profesionales apasionados por la tecnología y la innovación. Con años de experiencia en la industria, nos dedicamos a proporcionar soluciones que no solo cumplen con los estándares de calidad, sino que también superan las expectativas de nuestros clientes.</p>
    </Section>
  );
};

export default AboutUs;
