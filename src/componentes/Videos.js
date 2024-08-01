import React from 'react';
import Section from './Section';
import './Videos.css'; // Importa el archivo CSS

const Videos = () => {
  return (
    <Section id="videos" title="Videos">
      <div className="section-content">
        <div className="video-container">
          <video controls>
            <source src="/static/video1.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        <div className="video-container">
          <video controls>
            <source src="/static/video2.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </Section>
  );
};

export default Videos;
