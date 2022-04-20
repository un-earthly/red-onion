import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Service from '../../Utils/Service';
import useFoodCategory from '../../Utils/useFoodCategory';

export default function Category() {
    const { foods } = useFoodCategory()
    const breakfast = foods.filter(food => food.category.toLowerCase() === 'breakfast')
    const lunch = foods.filter(food => food.category.toLowerCase() === 'lunch')
    const dinner = foods.filter(food => food.category.toLowerCase() === 'dinner')
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-4">

                        {
                            breakfast.map(food => <Service key={food.id} food={food} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-4">

                        {
                            lunch.map(food => <Service key={food.id} food={food} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-4">

                        {
                            dinner.map(food => <Service key={food.id} food={food} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}
