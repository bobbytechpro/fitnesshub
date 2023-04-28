
import React, {useState} from 'react'

import { Bars4Icon,  XMarkIcon } from '@heroicons/react/24/solid'

import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () =>{
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


    return(
        <div  className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-slate-500'>FitnessHub.</h1>
                    <ul className='hidden md:flex'>
                    <li className='text-slate-500 font-bold'><Link  to="Home"  smooth={true} offset={50} duration={500} >Home</Link></li>
                    <li className='text-slate-500 font-bold'><Link  to="Apply"  smooth={true} offset={-200} duration={500} >Apply</Link></li>
                    <li className='text-slate-500 font-bold'><Link  to="Freeclass"  smooth={true} offset={-50} duration={500} >Freeclass</Link></li>
                    <li className='text-slate-500 font-bold'><Link  to="Ourstory"  smooth={true} offset={-100} duration={500} >Ourstory</Link></li>
                    <li className='text-slate-500 font-bold'><Link  to="Pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                        <button className='border-none bg-transparent  mr-4 font-bold text-slate-500'>sign in</button>
                        <button className='px-8 py-3 font-bold text-slate-500'>sign out</button>
                </div>
                <div className='md:hidden bold mr-4 
                ' onClick={handleClick}>

                    {!nav ?<Bars4Icon className='w-5'/> :< XMarkIcon className='w-5'/>}
                </div>
            </div>

            <ul className={!nav ? 'hidden': 'absolute bg-zinc-200 w-full px-8 font-bold'}>
                <li className='text-slate-500 border-b-2 border-zinc-300  w-ful'><Link onClick={handleClose}  to="Home"  smooth={true} offset={50} duration={500} >Home</Link></li>
                <li className='text-slate-500 border-b-2 border-zinc-300  w-full'><Link onClick={handleClose} to="Apply"  smooth={true} offset={-200} duration={500} >Apply</Link></li>
                <li className='text-slate-500 border-b-2 border-zinc-300  w-full'><Link onClick={handleClose} to="Freeclass"  smooth={true} offset={-50} duration={500} >Freeclass</Link></li>
                <li className='text-slate-500 border-b-2 border-zinc-300  w-full'><Link onClick={handleClose} to="Ourstory"  smooth={true} offset={-100} duration={500} >Ourstory</Link></li>
                <li className='text-slate-500 border-b-2 border-zinc-300  w-full'><Link onClick={handleClose} to="Pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>

                

                <div className='flex flex-col my-4'>
                <button className='bg-transparent  px-8 py-3 mb-4 text-slate-600'>sign in</button>
                <button className='px-8 py-3 text-slate-500'>sign up</button>
                </div>
            </ul>
            
        
        </div>


    )
}

export default Navbar

















