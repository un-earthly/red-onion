import React from 'react'

export default function Card({ img, title, icon, }) {
    return (
        <div className='hover:shadow-lg hover:rounded-xl duration-500 pb-16'>
            <img src={img} className='' alt={`image of ${title}`} />
            <div className='flex p-3' >
                <i className={`bg-[#f91944] px-3 py-2 h-1/2 duration-500 text-white rounded-full bi bi-${icon}`}></i>
                <div className='ml-3 pr-2'>
                    <p className="text-black font-semibold mb-3">{title}</p>
                    <p className="text-gray-500 font-light tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus molestiae repellat eveniet et erro.</p>
                    <p className='mt-2 flex items-center justify-left text-blue-500 cursor-pointer'>See More <i className="bi bi-arrow-right-circle-fill text-green-500 text-xl ml-2"></i></p>

                </div>
            </div>
        </div>
    )
}
