import { useEffect, useState } from "react"

const useFoodBlogs = () => {
    const [foodBlogs, setFoodBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foodblogs')
            .then(res => res.json())
            .then(data => setFoodBlogs(data))
    }, [])

    return [foodBlogs, setFoodBlogs];
}

export default useFoodBlogs