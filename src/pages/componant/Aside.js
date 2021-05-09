import React, { } from 'react'

import Menu from './Menu'
import profile from '../../img/profile.jpg';

const ImgProfile = ({ img }) => {

    if (img) return <img className='border-2 border-white w-16 h-16 rounded-full ' src={img} alt='profile' />

    else return <i className="fas   fa-user-circle  fa-3x "></i>
}







export default function Aside() {

    return (

        <aside className=' bg-gray-50 h-full  w-16 md:w-64 text-gray-600'>
            <header className='p-4 hidden md:block'>
               

                {/* photo profile */}
                <div className=' flex items-center justify-start py-6 space-x-2 text-gray-800 font-'>

                    <ImgProfile img={profile} />


                    <div className=''>
                        <p className='text-sm'>Boudjahfa</p>
                        <p className='text-sm'>lakhder</p>

                    </div>
                </div>
                {/* photo profile */}
            </header>
            <div className=' py-5 md:py-0  ' >
          
            <Menu vertical={true} />
            
          
            </div>

        </aside>

    )
}
