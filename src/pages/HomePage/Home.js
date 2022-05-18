import React from 'react';
import Navigationbar from '../../Components/NavbarComponent/Navigationbar';
import Calousel from '../../Components/CarouselComponent/Calousel';
import About from '../../Components/AboutComponent/About';
import Services from '../../Components/ServicesComponent/Services';
import Partners from '../../Components/PartnersComponent/Partners';
import Products from '../../Components/ProductsComponent/Products';
import Footer from '../../Components/FooterComponent/Footer';
import Events from '../../Components/EventsComponent/Events';
import Testimonial from '../../Components/TestimonialComponent/Testimonial';

export default function Home() {
  return (
    <div>
        <Navigationbar />
        <Calousel /> 
        <About />
        <Services />
        <Partners />
        <Products />
        <Testimonial />
        <Events />
        <Footer />

    </div>
  )
}
