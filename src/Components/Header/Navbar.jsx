import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Slide } from 'react-awesome-reveal';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);

    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'p-3 font-semibold border-b-2' : 'p-3'}><li>Home</li></NavLink>
        <NavLink to='/add-to-find' className={({ isActive }) => isActive ? 'p-3 font-semibold border-b-2' : 'p-3'}><li>Add to Find Roommate</li></NavLink>
        <NavLink to='/browse-listing' className={({ isActive }) => isActive ? 'p-3 font-semibold border-b-2' : 'p-3'}><li>Browse Listing</li></NavLink>
        <NavLink to='/my-listing' className={({ isActive }) => isActive ? 'p-3 font-semibold border-b-2' : 'p-3'}><li>My Listing</li></NavLink>
    </>;

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast("You Logged Out successfully");
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    return (
        <div className="navbar bg-[#669BBC] dark:bg-[#1B263B] p-2 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 text-black dark:text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Slide>
                    <Link to='/' className="text-2xl text-[#003049] dark:text-white md:text-3xl font-bold flex items-center gap-3">
                        <img src={logoImg} alt="" className='w-[30px] md:w-[50px]' />
                        <h1>Hom<span className='text-[#C1121F]'>iFy</span></h1>
                    </Link>
                </Slide>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black dark:text-white">
                    {links}
                </ul>
            </div>
            <Slide direction='right' className="navbar-end mr-2">
                {
                    !user ? <Link to='/login' className="btn bg-[#003049] dark:bg-[#8ecae6] text-white dark:text-black">Login</Link> :
                        <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0} role="button" className="">
                                <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1747922157~exp=1747925757~hmac=2eb8683d97ac1281bdbd1b7b44ecd1dc3cf3ba0f2986ba35b048976d2f172905&w=826" alt="User" className='w-10 rounded-2xl' />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-gray-800 text-black dark:text-white rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
                                <li><a>{user && user.displayName}</a></li>
                                <li><a>{user && user.email}</a></li>
                                <li><button onClick={handleLogout} className='btn'>Logout</button></li>
                            </ul>
                        </div>
                }
            </Slide>
        </div>

    );
};

export default Navbar;