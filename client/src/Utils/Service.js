import React from 'react'

export default function Service({ food }) {
    return (
        <div className='text-center m-4 hover:shadow-lg py-5 rounded-lg duration-500 px-3'>
            <img src={food.img} width={200} className='block mx-auto my-4' alt="" />
            <div className="space-y-1">
                <h2 className="text-lg tracking-tight">{food.name}</h2>
                <p className="text-xs font-light text-gray-500">How We Dream About Our Future</p>
                <h1 className="text-xl font-semibold">{food.price}</h1>
            </div>
        </div>
    )
}
