import axios from "axios"
import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allblogs')
            .then(data => setBlogs(data.data))
    }, [])

    return [blogs, setBlogs];
}

export default useBlogs
