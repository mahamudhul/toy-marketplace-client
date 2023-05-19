/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-slate-900	 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            <Link to='/'>Home</Link>
                            <Link to='/alltoys'>All toys</Link>
                            <Link to='/addtoys'>Add toys</Link>
                            <Link to='/blogs'>Blogs</Link>
                            {
                                user ? <button onClick={handleLogout} variant='secondary' >Logout</button> : <Link to='/login'>
                                    <button variant='secondary'>Login</button>
                                </Link>
                            }
                            <Link to='/register'>Register</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 font-bold">
                        <Link to='/'>Home</Link>
                        <Link to='/alltoys'>All toys</Link>
                        <Link to='/addtoys'>Add toys</Link>
                        <Link to='/blogs'>Blogs</Link>
                        {
                            user ? <button onClick={handleLogout} variant='secondary' >Logout</button> : <Link to='/login'>
                                <button variant='secondary'>Login</button>
                            </Link>
                        }
                        {/* <Link to='/login'>Log in</Link> */}
                        <Link to='/register'>Register</Link>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;