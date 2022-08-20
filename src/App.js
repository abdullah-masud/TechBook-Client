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

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:category' element={<Blogs />} />
        <Route path='write' element={<Write />} />
        <Route path='about' element={<About />} />
        <Route path='fullBlog/:blogId' element={<FullBlog />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
