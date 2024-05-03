import React, { useEffect } from 'react';
import { FaParachuteBox } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Stats = () => {

    return (
        <div className="mx-auto w-[90%] px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-20 bg-slate-50">
            <h1 className='text-[35px] text-center font-bold'>We Have <span className='text-[#79c348]'>Achieved</span></h1>
            <div className="mt-[7rem] row-gap-8 grid grid-cols-2 md:grid-cols-4">

                <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                    <div className='flex flex-row ml-[4rem]'>
                        <div className="font-heading tracking-widest text-[2.6rem] font-bold text-[rgb(17,78,104)] lg:text-5xl xl:text-6xl">
                            890
                        </div>
                        <div className='text-[3.5rem] ml-[1rem] text-[rgb(245,118,63)]'>
                            <FaParachuteBox />
                        </div>
                    </div>

                    <p className="text-sm font-medium uppercase tracking-widest text-[#79c348] lg:text-base ">
                        Delivered Packages
                    </p>
                </div>

                <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                    <div className='flex flex-row ml-[4rem]'>
                        <div className="font-heading tracking-widest  text-[2.6rem] font-bold text-[rgb(17,78,104)] lg:text-5xl xl:text-6xl">
                            137
                        </div>
                        <div className='text-[3.5rem] ml-[1rem] text-[#2c742c]'>
                            <BiWorld />
                        </div>
                    </div>

                    <p className="text-sm font-medium uppercase tracking-widest text-[#79c348] lg:text-base ">
                        Countries Covered
                    </p>
                </div>

                <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                    <div className='flex flex-row ml-[4rem]'>
                        <div className="font-heading tracking-widest  text-[2.6rem] font-bold text-[rgb(17,78,104)] lg:text-5xl xl:text-6xl">
                            740
                        </div>
                        <div className='text-[3.5rem] ml-[1rem] text-yellow-400'>
                            <FaBoxOpen />
                        </div>
                    </div>

                    <p className="text-sm font-medium uppercase tracking-widest text-[#79c348] lg:text-base ">
                        Ton of Goods
                    </p>
                </div>

                <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                    <div className='flex flex-row ml-[4rem]'>
                        <div className="font-heading tracking-widest  text-[2.6rem] font-bold text-[rgb(17,78,104)] lg:text-5xl xl:text-6xl">
                            600
                        </div>
                        <div className='text-[3.5rem] ml-[1rem] text-[#4a86ce]'>
                            <FaPeopleGroup />
                        </div>
                    </div>

                    <p className="text-sm font-medium uppercase tracking-widest text-[#79c348] lg:text-base">
                        Statisfied Clients
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Stats;
