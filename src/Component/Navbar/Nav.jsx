import { Link } from "react-router-dom";


const Nav = () => {
    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 mb-20">
            <div className="navbar-start">

                <a className="btn btn-ghost text-xl">TechNext</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLink}
                </ul>
            </div>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:ml-72 ml-36">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-64 md:ml-20 ml-0 w-52 gap-4">
                    {navLink}
                </ul>
            </div>
        </div>

    );
};

export default Nav;