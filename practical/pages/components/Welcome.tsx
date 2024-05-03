import React from 'react'

const Welcome = () => {
    return (
        <div className='box-border bg-slate-50 '>

            <div className="ml-[10rem] mt-[10rem] mb-[2rem] h-[85vh] w-[50%]">
                <div className="container">

                    <div className="image-stack">
                        <div className="image-stack__item image-stack__item--bottom">
                            <img src="https://www.elalog.eu/wp-content/uploads/2021/06/home1-section-1.jpg" alt="" />
                        </div>
                        <div className="image-stack__item image-stack__item--top">
                            <img src="https://prologistics.ca/wp-content/uploads/2021/07/thsn-form-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='talkbubble ml-[32rem] mt-[-19rem]'>
                <div className='py-5'>
                    <p className='ml-[24px] text-white text-[28px]  '>15,350+ <br />
                        <span className='text-[14px] br-min'>Clients Worldwide</span>
                    </p>
                </div>
            </div>
            <div className='parallelogram ml-[7rem] mt-[-9rem]'></div>
            <div className='triangle ml-[8rem] mt-[2rem]'></div>
            <div className='ml-[53rem] mt-[-25rem]  '>
                <div className='parallelogram1 ml-[-3rem]  mt-[-1rem] absolute   '></div>
                <h1 className='font-bold text-[35px] relative'>TransMax Logistics <br />
                    Around <span className='text-[rgb(245,118,63)]'>the World</span>
                </h1>
                <br />
                <p className='w-[450px]'>
                    <span className='font-semibold'>
                        Transmax is the world&apos;s driving worldwide coordinations
                        supplier - we uphold industry and exchange the worldwide
                        trade of merchandise through land transport.
                    </span>

                    <br />
                    <br />
                    our worth added administrations guarentee the progression of
                    products proceeds consistently and supply chains stay lean and
                    streamlined for progresss</p>
                    <br />
                    <div className="bg-[#f2ecec] p-3 w-40 text-center text-[14px] font-bold text-[rgb(17,78,104)]"> <button  >MORE ABOUT US</button></div>

            </div>


        </div>


    )
}

export default Welcome
