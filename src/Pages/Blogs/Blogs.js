import useBlogs from '../../hooks/useBlogs';
import Blog from '../Home/HomeBlogs/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useBlogs();

    const getFilteredBlogs = (category) => {
        console.log(category)
        const blogCategory = category
        const url = `https://techbook-server.onrender.com/categoryblogs?category=${blogCategory}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }

    const getAllBlogs = () => {
        const url = `https://techbook-server.onrender.com/allblogs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }

    return (
        <div className='flex lg:flex-row flex-col-reverse min-h-screen max-w-7xl mx-auto my-12 justify-center'>
            <div className='grid px-3'>
                {
                    blogs?.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    />).reverse()
                }
            </div>
            <div className="lg:divider lg:divider-horizontal"></div>
            <div className='flex flex-row lg:justify-start justify-center lg:flex-col gap-3 lg:mt-4'>
                <button onClick={getAllBlogs} className='btn btn-xs btn-outline btn-primary'>All</button>
                <button onClick={() => getFilteredBlogs('programming')} className='btn btn-xs btn-outline btn-primary'>Programming</button>
                <button onClick={() => getFilteredBlogs('food')} className='btn btn-xs btn-outline btn-primary'>Food</button>
                <button onClick={() => getFilteredBlogs('travel')} className='btn btn-xs btn-outline btn-primary'>Travel</button>
            </div>
        </div>
    );
};

export default Blogs;