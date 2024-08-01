// src/components/Section.js
import React from 'react';
import './SectionBienvenido.css';

const Section = ({ id, title, children }) => (
  <section id={id}>
    <div className="container">
      <div className="card">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  </section>
);

export default Section;
