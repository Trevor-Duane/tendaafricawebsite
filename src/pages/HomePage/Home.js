import React from 'react';
import Navigationbar from '../../Components/NavbarComponent/Navigationbar';
import Calousel from '../../Components/CarouselComponent/Calousel';
import About from '../../Components/AboutComponent/About';
import Services from '../../Components/ServicesComponent/Services';
import Partners from '../../Components/PartnersComponent/Partners';
import Products from '../../Components/ProductsComponent/Products';
import Footer from '../../Components/FooterComponent/Footer';
import Map from '../../Components/MapComponent/Map';
import Testimonial from '../../Components/TestimonialComponent/Testimonial';
import Sidebar from '../../Components/SidebarComponent/Sidebar';
import './home.css';
import Slider from '../../Components/Carousel/Slider';

export default function Home() {
  return (
    <div>
        <Navigationbar />
        <Slider/>
        <div className="homeContent">
          <div className="lefthomeContent">
            <About />
            <Services />
          </div>
          <div className="righthomeContent">
            <Sidebar/> 
          </div>
        </div>
        <Partners />
        <Products />
        <Testimonial />
        <Map />
        <Footer />

    </div>
  )
}
