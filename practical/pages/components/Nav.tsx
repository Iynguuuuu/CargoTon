import { IoMdArrowDropdown } from "react-icons/io";
import React from 'react';
import { Bars3Icon } from "@heroicons/react/16/solid";
import { GiCargoCrate } from "react-icons/gi";

const Nav = () => {

    return (
        <div className="w-[100%] mt-5 items-center mx-auto relative z-[10000]">
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%] '>
                <div className='flex flex-row  text-black text-[30px]   '>
                    <div>Cargo</div>  <span className="mt-1 ps-1 text-yellow-400 flex flex-col"><GiCargoCrate />
                        <span className="text-black text-[11px] font-bold text-center">TON</span>
                    </span>
                </div>

                <div className="flex flex-row space-x-12">
                    <a href="#Home"><div className="nav-link"><div className=' flex flex-row mt-3'><p><span className='text-yellow-400 font-black text-[15px]'>| </span></p> HOME <span className="arrowdown "><IoMdArrowDropdown /></span></div></div></a>
                    <a href="#pages"><div className="nav-link"><div className=' flex flex-row mt-3'>PAGES <span className="arrowdown "><IoMdArrowDropdown /></span></div></div></a>
                    <a href="#Tracking"><div className="nav-link"><div className=' flex flex-row mt-3'>TRACKING</div></div></a>
                    <a href="#Services"><div className="nav-link"><div className=' flex flex-row mt-3'>SERVICES <span className="arrowdown "><IoMdArrowDropdown /></span></div></div></a>
                    <a href="#Blog"><div className="nav-link"><div className=' flex flex-row mt-3'>BLOG <span className="arrowdown "><IoMdArrowDropdown /></span></div></div></a>

                    <div className=" flex flex-row space-x-4 text-14px">
                        <div className="bg-yellow-400 p-2.5 w-40 text-center text-yellow-50"> <button  >GET A QUOTE</button></div>
                        <div className="bg-black p-2 w-32  text-center text-yellow-50">  <button>SIGN IN</button></div>
                    </div >
                </div>



            </div>

        </div>
    )
}

export default Nav
