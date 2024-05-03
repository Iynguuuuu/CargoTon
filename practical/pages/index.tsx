import React from 'react'
import Nav from './components/Nav'
import ImageSlides from './components/ImageSlides'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Logo from './components/Logo'
import WhyUs from './components/WhyUs'
import News from './components/News'
import Footer from './components/Footer'


const Homepage = () => {


  return (
    <div className='bg-slate-50'>

      <div className=''>
        <Nav />
      </div>


      <div className='relative'>
        <Home />

        <div className='ml-[8rem] mt-[-35rem]'>
          <ImageSlides />
        </div>

      </div>

      <div className='mt-[5rem]'>
        <Welcome />
      </div>

      <Services />
      <Stats />
      <Testimonials />
      <Logo />
      <WhyUs />
      <News />
      <Footer />


    </div>
  )
}

export default Homepage
