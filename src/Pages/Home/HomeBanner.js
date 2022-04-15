import React from 'react'
import Button from '../../Utils/Button'
import banner from '../../images/homebanner.png'
export default function HomeBanner() {
    return (
        <div className='p-4 relative flex items-center justify-center flex-col h-[400px]'>
            <img src={banner} className='absolute top-0 left-0 -z-10 w-full object-cover' alt="" />
            <h1 className='text-4xl my-4'>Best food for your belly</h1>
            <div className="bg-white rounded-full w-[280px] flex mx-auto items-center justify-between">
                <input type="text" placeholder='Search Your Food' className='outline-none text-sm flex-grow bg-white rounded-full px-3' />
                <Button btnText='Search' />
            </div>
        </div>
    )
}
