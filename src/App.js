import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs';
import Write from './Pages/Write/Write';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='write' element={<Write />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
