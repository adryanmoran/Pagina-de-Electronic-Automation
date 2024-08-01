import React from 'react';
import Section from './Section';
import './OurServices.css';
const OurServices = () => {
  return (
    <Section id="servicios" title="Nuestros Servicios">
      <h3>Temario</h3>
      <ul>
        <li>Lectura de diagramas eléctricos.</li>
        <li>Conexión física de sensores y botones en el PLC.</li>
        <li>Programación de botones y sensores.</li>
        <li>Explicación de MOVE, CTU, TON, TOFF, LIM y comparadores.</li>
        <li>Explicación de scanner KEYENCE.</li>
        <li>Explicación de mapeo de señales para scanner keyence.</li>
        <li>Explicación de tipo de sensores y su uso.</li>
        <li>Programación de scanner keyence con un ejemplo industrial.</li>
        <li>Introducción al HMI.</li>
        <li>Ejemplo de programación de HMI y conexión con PLC.</li>
      </ul>
    </Section>
  );
};

export default OurServices;
