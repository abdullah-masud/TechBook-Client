import axios from "axios"
import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('https://techbook-server.onrender.com/allblogs')
            .then(data => setBlogs(data.data))
    }, [])

    return [blogs, setBlogs];
}

export default useBlogs
