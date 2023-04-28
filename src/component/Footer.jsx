import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaTwitch
} from 'react-icons/fa'



const Footer = () => {
    return(
        <div className='w-full mt-24  bg-zinc-200 text-gray-600 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div >
                    <h6 className='font-bold uppercase pt-2'>Solution </h6>
                    <ul>
                        <li className='py-1'>Our Community</li>
                        <li className='py-1'>Strength Growth</li>
                        <li className='py-1'>Lose wealth</li>
                        <li className='py-1'>Training</li>
                        <li className='py-1'>one on one </li>
                    </ul>
                </div>
     
                <div >
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Our Community</li>
                        <li className='py-1'>Strength Growth</li>
                        <li className='py-1'>Lose wealth</li>
                        <li className='py-1'>Training</li>
                        <li className='py-1'>one on one </li>
                    </ul>
                </div>
     
                <div >
                    <h6 className='font-bold uppercase pt-2'>FitnessHub</h6>
                    <ul>
                        <li className='py-1'>Our Community</li>
                        <li className='py-1'>Strength Growth</li>
                        <li className='py-1'>Lose wealth</li>
                        <li className='py-1'>Training</li>
                        <li className='py-1'>one on one </li>
                    </ul>
                </div>
     
                <div >
                    <h6 className='font-bold uppercase pt-2'>Pricing</h6>
                    <ul>
                        <li className='py-1'>Our Community</li>
                        <li className='py-1'>Strength Growth</li>
                        <li className='py-1'>Lose wealth</li>
                        <li className='py-1'>Training</li>
                        <li className='py-1'>one on one </li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our Newsletter</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aperiam.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 roubded-md mb-4' type='email' placeholder='email'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>

                </div>

              

            </div>


        <div className='flex flex-col max-w-[1240px] px-2 pt-4 mx-auto justify-between  text-gray-700 sm:flex-row text-center'>
            <p className='py-4'>2023 bobbytech Workflow, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaGithub/>
                <FaTwitch/>
            </div>
        </div>

        </div>
    )
}

export default Footer