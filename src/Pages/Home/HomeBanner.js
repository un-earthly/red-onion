import React from 'react'
import Button from '../../Utils/Button'
import banner from '../../images/homebanner.png'
export default function HomeBanner() {
    return (
        <div className='p-4 relative flex items-center justify-center flex-col h-[450px]'>
            <img src={banner} className='absolute top-0 left-0 -z-10 w-full object-cover h-full' alt="" />
            <h1 className='text-4xl my-4'>Best food waiting for your belly</h1>
            <div className="bg-white rounded-full mx-auto flex items-center justify-between">
                <input type="text" placeholder='Search Your Food' className='outline-none text-sm flex-grow px-8 py-2 bg-white rounded-full' />
                <Button btnText='Search' classList='py-2' />
            </div>
        </div>
    )
}
