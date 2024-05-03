import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowCircleRight } from "react-icons/fa";

const Services = () => {

    // Animation AOS setup
    useEffect(() => {

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

    }, [])


    return (

        <div className='bg-slate-50 pt-[4rem] md:pt-[8rem] pb-[5rem]'>


            <h2 className='text-center font-bold text-[#79c348] text-[20px]'>Real solution, Real Fast !</h2>
            <h1 className='text-center font-bold text-black text-[35px]'>Best Global Logistics Solutions</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>

                <div data-aos="fade-right">
                    <div className='bg-[white] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl shadow-xl '>
                        <div className='w-[60%]  ml-[-30px] mt-[-32px] mb-[2rem] '>
                            <img className='h-[350px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/An-124_ready.jpg/1200px-An-124_ready.jpg" alt="" />
                        </div>

                        <div className='text-[16px] text-[black] mt:text-[30px] mt-[-330px] ml-[18rem]  text-left capitalize'>
                            <h1 className='font-bold  '>Flight Services</h1>

                            <p className='font-normal'><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum possimus, quam debitis libero voluptatibus
                                placeat error est reprehenderit totam similique quasi eum dignissimos obcaeca
                            </p>
                            <br />
                            <p className='mt-[15px ] flex flex-row'> <br /> <span className='text-[22px] text-[#79c348]'><FaArrowCircleRight /></span>&nbsp; Read more</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="300">
                    <div className='bg-[white] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl shadow-xl  '>
                        <div className='w-[60%]  ml-[-30px] mt-[-32px] mb-[2rem] '>
                            <img className="h-[350px]" src="https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg" alt="" />
                        </div>

                        <div className='text-[16px] text-[black] mt:text-[30px] mt-[-330px] ml-[18rem]  text-left capitalize'>
                            <h1 className='font-bold  '>Drone Services</h1>

                            <p className='font-normal'><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum possimus, quam debitis libero voluptatibus
                                placeat error est reprehenderit totam similique quasi eum dignissimos obcaeca
                            </p>
                            <br />
                            <p className='mt-[15px ] flex flex-row'> <br /> <span className='text-[22px] text-[#79c348]'><FaArrowCircleRight /></span>&nbsp; Read more</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-delay="500">
                    <div className='bg-[white] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl shadow-xl  '>
                        <div className='w-[60%]  ml-[-30px] mt-[-32px] mb-[2rem] '>
                            <img className='h-[350px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Containerterminal_Altenwerder_%28Hamburg-Altenwerder%29.Iris_Bolten.4.phb.ajb.jpg/800px-Containerterminal_Altenwerder_%28Hamburg-Altenwerder%29.Iris_Bolten.4.phb.ajb.jpg" alt="" />
                        </div>

                        <div className='text-[16px] text-[black] mt:text-[30px] mt-[-330px] ml-[18rem]  text-left capitalize'>
                            <h1 className='font-bold  '>Ship Services</h1>

                            <p className='font-normal'><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum possimus, quam debitis libero voluptatibus
                                placeat error est reprehenderit totam similique quasi eum dignissimos obcaeca
                            </p>
                            <br />
                            <p className='mt-[15px ] flex flex-row'> <br /> <span className='text-[22px] text-[#79c348]'><FaArrowCircleRight /></span>&nbsp; Read more</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="600">
                    <div className='bg-[white] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl shadow-xl '>
                        <div className='w-[60%]  ml-[-30px] mt-[-32px] mb-[2rem] '>
                            <img className='h-[350px]' src="https://cdn.britannica.com/17/126517-050-9CDCBDDF/semi-semitrailer-truck-tractor-highway.jpg" alt="" />
                        </div>

                        <div className='text-[16px] text-[black] mt:text-[30px] mt-[-330px] ml-[18rem]  text-left capitalize'>
                            <h1 className='font-bold  '>Truck Services</h1>

                            <p className='font-normal'><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum possimus, quam debitis libero voluptatibus
                                placeat error est reprehenderit totam similique quasi eum dignissimos obcaeca
                            </p>
                            <br />
                            <p className='mt-[15px ] flex flex-row'> <br /> <span className='text-[22px] text-[#79c348]'><FaArrowCircleRight /></span>&nbsp; Read more</p>
                        </div>

                    </div>

                </div>

                <div className='text-left text-[black]'>
                    <p className='flex flex-row'> Logistic & Transports Solutions Saves Your Time.&nbsp; <span className='font-bold'>Find Your Solutions &nbsp;</span>
                    <span className=' text-[22px]'><FaArrowCircleRight /></span></p>
                </div>
            </div>

        </div>

    )
}

export default Services
