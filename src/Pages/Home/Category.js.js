import React from 'react'
import { Link } from 'react-router-dom'

export default function Cartegory() {
    return (
        <div>
            <ul className='flex items-center justify-center'>

                <Link to='/breakfast' className='p-3 mx-2 cursor-pointer'>Breakfast</Link>
                <Link to='/lunch' className='p-3 mx-2 cursor-pointer'>Lunch</Link>
                <Link to='/dinner' className='p-3 mx-2 cursor-pointer'>Dinner</Link>
            </ul>
        </div>

    )
}
