import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './ContactForm.css';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o4yspd8', 'template_6kraxm1', form.current, 'IUz5twln6skNCbajS')
      .then(
        () => {
          Swal.fire({
            title: 'Correo enviado',
            text: 'Tu correo ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar tu correo. Por favor, intenta nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contáctanos, estamos a sus órdenes</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name" className="form-label">Nombre</label>
          <input type="text" id="user_name" name="user_name" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email" className="form-label">Email</label>
          <input type="email" id="user_email" name="user_email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea id="message" name="message" className="form-textarea" required />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      <div className="social-links">
        <a href="https://www.facebook.com/electronicautomation" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://wa.me/8443131268" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default Contacto;
