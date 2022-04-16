import React from 'react'

export default function Button({ classList, btnText,onclick }) {
    return (
        <button onClick={onclick} className={`duration-500 rounded-full text-white py-1 bg-[#f91944] px-6 ${classList} `}>{btnText}</button>
    )
}
