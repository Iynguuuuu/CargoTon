import React from 'react'
import ImageSlides from './ImageSlides'

const Home = () => {
  return (
    // bg-[url(https://img.freepik.com/premium-vector/ink-splash-paint-brush-stroke_528151-1806.jpg)] bg-cover bg-center
    <section id='Home'>  <div className=' w-[35%] ml-[5rem] mt-[5rem] '>
      <div className='  w-[500px] h-[500px]  '>
        <p className='font-bold tracking-[.3em] br-min '><span className='text-yellow-400 font-black text-[24px]'>| </span >LOGISTIC</p>
        <h1 className='text-[60px]  font-semibold'>Best Shipping <br />
          <span className='text-[60px] text-yellow-400 font-bold '>Partner</span>
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, molestiae esse. Odit molestias optio,
          eaque recusandae dolores ea dolorem tempora amet iste asperiores veritatis beatae labore id atque.</p>
        <br />
        <div className="bg-yellow-400 p-2.5 w-40 text-center text-yellow-50"> <button  >DISCOVER MORE</button></div>
      </div>
    </div>
    </section>

  )
}

export default Home
