import React from 'react'
import HomeBanner from './HomeBanner'
import Navbar from './Navbar'
import Cartegory from './Tabs.js'

export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <Cartegory />
        </div>
    )
}
