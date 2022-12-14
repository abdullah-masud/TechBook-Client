import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import defaultImage from '../../assets/images/defaultImage.png'
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [user, Loading, error] = useAuthState(auth);
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`https://techbook-server.onrender.com/userProfile?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user?.email])

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li className="hover:text-accent hover:underline cursor-pointer font-semibold text-base mr-6"><Link to='/'>Home</Link></li>
        <li className="hover:text-accent hover:underline cursor-pointer font-semibold text-base mr-6"><Link to='/blogs'>Blogs</Link></li>
        <li className="hover:text-accent hover:underline cursor-pointer font-semibold text-base mr-6"><Link to='/write'>Write</Link></li>
    </>
    return (
        <div className="navbar bg-[#f1f1f1] max-w-7xl mx-auto  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl font-bold">TechBook</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="1" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile[0]?.displayPicture ? profile[0]?.displayPicture : defaultImage} alt="" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li className="text-1xl font-semibold text-primary ml-4">{user?.displayName}</li>

                        {
                            user &&
                            <>
                                <li><Link to='/profile'>Profile</Link></li>
                                <li><Link to='/myblogs'>My Blogs</Link></li>
                            </>
                        }
                        <li>
                            {
                                user ?
                                    <button onClick={logout}>Logout</button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;