import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/Profile.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const Navlinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink> All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink>My Art&Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          <a className="font-display font-bold text-2xl">Art & Craft</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                All Art & craft Items
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                Add Craft Item
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                My Art&Craft List
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-20 -ml-5  md:ml-0 md:mt-0  navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10">
                  <img
                    className="rounded-full"
                    alt="user photo"
                    src={user?.photoURL || profile}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName || "User Name not found"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => logOut()}
                    className="btn btn-sm btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn btn-sm btn-ghost">SignIn</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
