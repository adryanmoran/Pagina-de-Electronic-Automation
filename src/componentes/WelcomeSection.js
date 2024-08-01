import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio">
      <div className="container">
        <div className="card2">
          <div className="card_title__container">
            <h2 className="card_title">Bienvenido a Electronic Automation</h2>
            <p className="card_paragraph">¡Bienvenidos a nuestra Academia de Programación PLC!</p>
          </div>
          <p className="card_paragraph">¿Quieres aprender a programar en <strong>PLC Siemens</strong> y dominar el arte de la <strong>automatización industrial</strong>? ¡Esta es tu oportunidad de mejorar tus habilidades como programador de PLC!</p>
          <ul className="card__list">
            {/* Lista de beneficios */}
          </ul>
          <p className="card_paragraph final_paragraph">¡No pierdas esta oportunidad de llevar tus habilidades al siguiente nivel! <strong>Inscríbete hoy</strong> y conviértete en un experto en programación de PLC Siemens.</p>
          <button className="button" onClick={scrollToContact}>Inscríbete ahora</button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
