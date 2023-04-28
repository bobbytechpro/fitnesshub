import { ArrowSmallRightIcon, PhoneIcon ,PowerIcon,UserPlusIcon} from '@heroicons/react/24/outline';
import React from 'react';



import freeImg from '../assets/Px5.jpg'



const Freeclass  = () => {
    return (
        <div name='Freeclass' className='w-full  mt-24'>
            <div className='w-full h-[700px] bg-gray-900 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={freeImg} alt="" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 upp
                    text-center'>Freeclass</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>finding the right mindset</h3>
                    <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid quia natus, atque dolores hic reprehenderit, ea excepturi sunt perspiciatis, aspernatur quam. Deserunt, maiores dignissimos ipsam ipsa eveniet tenetur.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bpld text-2xl my-6'>Supporting class</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis culpa deserunt!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowSmallRightIcon className='w-5 mt-2
                            '/></p>

                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PowerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bpld text-2xl my-6'>Build your confidence</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis culpa deserunt!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowSmallRightIcon className='w-5 mt-2
                            '/></p>

                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <UserPlusIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bpld text-2xl my-6'>Access</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis culpa deserunt!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Talk to our Tranier <ArrowSmallRightIcon className='w-5 mt-2
                            '/></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freeclass;