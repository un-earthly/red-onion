import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className="text-[200px] p-0 text-[#f91944]">4
                <img className='inline w-1/2 m-4 animate-spin' src='https://cdn.pixabay.com/photo/2021/02/07/13/07/pizza-5991179__340.png' alt="" />
                4</h1>
            <div className="my-8 flex items-center justify-center flex-col">
                <p>Oops The Page is Not Found</p>
                <Link to='/' className='text-[#f91944] underline'>Back To Home</Link>
            </div>
        </div>
    )
}
