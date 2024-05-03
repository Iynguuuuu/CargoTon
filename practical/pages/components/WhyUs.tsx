import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineMoreTime } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

const WhyUs = () => {
  return (
    <section id="Feature">
    <div className='bg-slate-50 pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='text-center text-black text-[35px] sm:text-[33px] md:text-[35px] font-bold'>
            Why <span className='text-[rgb(17,78,104)]'>Us</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] 
                    mx-auto items-center gap-[3rem] mt-8rem text-white pt-[3rem] '>
            <div data-aos="zoom-in">
                <div className='bg-[rgb(245,118,63)] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                            uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                    <FaTruckFast className='w-[6rem] h-[6rem] mx-auto text-[white]' />
                    <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                        Fast Delivery
                    </h1>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300">
                <div className=' bg-[#79c348] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                            uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                    <GiTakeMyMoney className='w-[6rem] h-[6rem] mx-auto text-[white]' />
                    <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                        Resonable Rates
                    </h1>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="500">
                <div className='bg-yellow-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                            uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                    <MdOutlineMoreTime className='w-[6rem] h-[6rem] mx-auto text-[white]' />
                    <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                        Time Saving
                    </h1>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="700">
                <div className='bg-[rgb(17,78,104)] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                            uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                    <GrUserWorker className='w-[6rem] h-[6rem] mx-auto text-[white]' />
                    <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                        Expertise in Industry
                    </h1>
                </div>
            </div>        

        </div>

    </div>
</section>
  )
}

export default WhyUs
