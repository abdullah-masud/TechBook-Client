import { useEffect, useState } from "react"

const useProgrammingBlogs = () => {
    const [programmingBlogs, setProgrammingBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/programmingblogs')
            .then(res => res.json())
            .then(data => setProgrammingBlogs(data))
    }, [])

    return [programmingBlogs, setProgrammingBlogs];
}

export default useProgrammingBlogs