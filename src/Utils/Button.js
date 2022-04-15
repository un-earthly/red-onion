import React from 'react'

export default function Button({ classList, btnText }) {
    return (
        <button className={`duration-500 rounded-full text-white py-1 bg-[#f91944] px-6 ${classList} `}>{btnText}</button>
    )
}
