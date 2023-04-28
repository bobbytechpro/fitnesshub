import React from 'react'

import {
    ShieldCheckIcon,
    ChatBubbleLeftIcon,
    UserCircleIcon,
    HomeModernIcon
} from '@heroicons/react/24/solid'

import bgImg from '../assets/young.jpg'

const Hero = () =>{
    return (
        <div name='Home' className=' w-full h-screen bg-zinc-200 flex flex-col justify-between '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-6 text-slate-500'>
                    <p className='text-2xl '>Unique fitnesshub facilities & solid training</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Fitness & healthy food</h1>
                    <p className='text-2xl font-bold text-slate-500'>that's our passion</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
                </div>
                <div>
                    <img className='w-5/6 bg-slate-500' src={bgImg} alt="/" />
                </div>
                <div className='absolute inset-x-0 bottom-0 flex flex-col py-8 md:min-w-[760px] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300  rounded-xl text-center shadow-xl' >
                    <p>Our services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><ShieldCheckIcon className='h-6 text-zinc-500'/>Home services</p>
                        <p className='flex px-4 py-2 text-slate-500'><ChatBubbleLeftIcon className='h-6'/>personal coach </p>
                        <p className='flex px-4 py-2 text-slate-500'><HomeModernIcon className='h-6'/>Healthy Tips </p>
                        <p className='flex px-4 py-2 text-slate-500'><UserCircleIcon className='h-6'/>Community Guild</p>
                    </div>
                </div>
                
            </div>
                
        </div>
    )
}

export default Hero