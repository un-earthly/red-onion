import { useEffect, useState } from "react";



const useFoodCategory = () => {

    const [foods, setFoods] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return { foods }

}
export default useFoodCategory;