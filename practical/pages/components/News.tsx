import React from 'react'

const News = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <h1 className="mb-8 lg:mb-16 text-[35px] font-bold  leading-tight text-center  md:text-4xl">Latest <span className='text-[#79c348]'>News</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: 'url(https://cdn.redstagfulfillment.com/wp-content/uploads/Cargo-Ship.jpg)' }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                className="text-xs bg-[#79c348] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#79c348] transition ease-in-out duration-500">Everglow Ship</a>
                            <div className="text-white w-[45px] opacity-80 bg-[#342e2e] font-regular flex flex-col justify-start">
                                <span className="text-3xl mx-auto leading-0 font-semibold">03</span>
                                <span className="-mt-2 mx-auto">May</span>
                            </div>
                        </div>
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Dr.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus consectetur eius sint? Totam laboriosam magnam autem qui officiis cumque?
                            </a>
                        </main>

                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: 'url(https://media.istockphoto.com/id/1310856881/photo/powerful-white-big-rig-long-haul-industrial-semi-truck-transporting-goods-in-refrigerator.jpg?s=612x612&w=0&k=20&c=pccl5umR3AzaEidbocqGmhx37J8bvmfCLpkTiFJmwCQ=)' }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                className="text-xs  bg-[#79c348] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#79c348] transition ease-in-out duration-500">California</a>
                            <div className="text-white  w-[45px] opacity-80 bg-[#342e2e] font-regular flex flex-col justify-start  ">
                                <span className="text-3xl mx-auto leading-0 font-semibold">10</span>
                                <span className="-mt-2 mx-auto">April</span>
                            </div>
                        </div>
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ab quidem, a esse totam quis?
                            </a>
                        </main>

                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: 'url(https://www.logisticsplus.com/wp-content/uploads/sites/26/2020/10/Cargo-Air-Charter-Photo.jpg)' }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                className="text-xs  bg-[#79c348] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#79c348] transition ease-in-out duration-500">Flight </a>
                            <div className="text-white  w-[45px] opacity-80 bg-[#342e2e] font-regular flex flex-col justify-start">
                                <span className="text-3xl mx-auto leading-0 font-semibold">27</span>
                                <span className="-mt-2 mx-auto">Feb</span>
                            </div>
                        </div>
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Middle
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam facilis aut expedita obcaecati numquam sit, nobis mollitia.

                            </a>
                        </main>

                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: 'url(https://dhl-freight-connections.com/wp-content/uploads/2023/03/DHL_Blog_RailFreight_Vorteile.jpg)' }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                className="text-xs  bg-[#79c348] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#79c348] transition ease-in-out duration-500">Jet Expess</a>
                            <div className="text-white  w-[45px] opacity-80 bg-[#342e2e] font-regular flex flex-col justify-start">
                                <span className="text-3xl mx-auto leading-0 font-semibold">28</span>
                                <span className="-mt-2 mx-auto">Jan</span>
                            </div>
                        </div>
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Afghan
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, natus.
                            </a>
                        </main>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default News
