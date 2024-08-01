import React, { useEffect } from 'react';
import Section from './Section';
import './FacebookReel.css';
const FacebookReel = () => {
  useEffect(() => {
    // Cargar el SDK de Facebook
    const loadFbSdk = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
      script.async = true;
      script.onload = () => window.FB && window.FB.XFBML.parse();
      document.body.appendChild(script);
    };
    
    loadFbSdk();
  }, []);

  return (
    <Section id="facebook-reel" title="Mira nuestro Reel en Facebook">
      <div className="fb-post" data-href="https://www.facebook.com/reel/1929022147598364" data-width="500" />
    </Section>
  );
};

export default FacebookReel;
