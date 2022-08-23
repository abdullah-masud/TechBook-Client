import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs';
import Write from './Pages/Write/Write';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import FullBlog from './Pages/FullBlog/FullBlog';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Shared/RequireAuth';
import Profile from './Pages/Profile/Profile';
import MyBlogs from './Pages/MyBlogs/MyBlogs';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:category' element={<Blogs />} />
        <Route path='write' element={<RequireAuth><Write /></RequireAuth>} />
        <Route path='about' element={<About />} />
        <Route path='fullBlog/:blogId' element={<FullBlog />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='myblogs' element={<RequireAuth><MyBlogs /></RequireAuth>} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
