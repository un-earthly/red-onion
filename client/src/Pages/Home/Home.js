import React from 'react'
import HomeBanner from './HomeBanner'
import Category from './Category.js'
import Card from '../../Utils/Card'
export default function Home() {
    return (
        <div>
            <HomeBanner />
            <div className='p-24 pt-16'>
                <Category />
                <div>
                    <h1 className="text-5xl my-2">Why Choose Us</h1>
                    <p className="text-sm my-8">
                        We Have a complete dadicated team to give <br /> complete support to our customer.
                    </p>
                    <div className="grid grid-cols-3 gap-4">

                        <Card title='Fast Delivary' img='https://raw.githubusercontent.com/ProgrammingHero1/red-onion/main/images/adult-blur-blurred-background-687824.png' icon='alarm' />
                        <Card title='A Good Auto Responder' icon='bell' img='https://raw.githubusercontent.com/ProgrammingHero1/red-onion/main/images/chef-cook-food-33614.png' />
                        <Card title='Home Delivary' icon='truck' img='https://raw.githubusercontent.com/ProgrammingHero1/red-onion/main/images/architecture-building-city-2047397.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}
