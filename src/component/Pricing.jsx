import React from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';
import bg from '../assets/Px4.jpg'

const Pricing = () =>{
    return(
       <div name='Pricing' className='w-full text-white my-24 '>
            <div className='w-full h-[800px] bg-gray-600 absolute mix-blend-overlay'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={bg} alt="" />
            </div>
            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='text-center py-8 text-slate-800' >
                    <h1 className='text-3xl text-white uppercase
                    '>Pricing</h1>
                    <h3 className='text-5xl font-bold text-white py-8'>the right price you can afford</h3>
                    <p className='text-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto rerum deleniti!</p>
                </div>

                <div className='grid md:grid-cols-2'>
                    <div className='bg-white text-slate-700 p-8 m-4 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm
                        '>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-400'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-400'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-400'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-400'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-400'/>Lorem, ipsum dolor.</p>
                        
                            <button className='w-full py-4 my-4 bg-slate-400'>Get started</button>
                        </div>
                    </div>   
                    <div className='bg-slate-900 text-slate-700 p-8 m-4 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-900 text-indigo-300 rounded-2xl text-sm
                        '>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$109 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='text-2xl'>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-200'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-200'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-200'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-200'/>Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-200'/>Lorem, ipsum dolor.</p>
                        
                            <button className='w-full py-4 my-4  bg-zinc-200'>Get started</button>
                        </div>
                    </div>   
                </div>
            </div>
       </div>
    )
}

export default Pricing