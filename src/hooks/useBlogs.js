import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allblogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return [blogs];
}

export default useBlogs