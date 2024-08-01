import React from 'react';
import Header from '../src/componentes/Header';
import Section from '../src/componentes/Section';
import ContactForm from '../src/componentes/ContactForm';
import Footer from '../src/componentes/Footer';
import WelcomeSection from '../src/componentes/WelcomeSection';
import GalleryCarousel from '../src/componentes/GalleryCarousel';
import AboutUs from '../src/componentes/AboutUs';
import OurServices from '../src/componentes/OurServices';
import Videos from '../src/componentes/Videos';
import FacebookReel from '../src/componentes/FacebookReel';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <GalleryCarousel />
        <AboutUs />
        <OurServices />
        <Videos />
        <FacebookReel />
        <section id="contact-container">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
