import React from 'react'

const Ourstory = () => {
    return(
        <div name='Ourstory' className='w-full my-32'>
            
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-gray-500 '>Trusted by our home ground community</h2>
                    <p className='text-3xl py-8 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus ab harum quis rerum soluta doloribus aliquam esse eos omnis.</p>
                </div>
                <div className='grid-cols-3 md:grid py-2 gap-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Hot tub</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>27/7</p >
                        <p className='text-gray-400 mt-2'>Active</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'> 
                        <p  className='text-6xl font-bold text-indigo-600'>complex</p>
                        <p className='text-gray-400 mt-2'>Transaction</p>
                    </div>
                </div>
            </div>
    
        


        </div>
    )
}

export default Ourstory;