import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/Profile.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/Canvas Haven.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const Navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/craftItem"> All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/craft">Add Craft</NavLink>
      </li>
      <li>
        <NavLink to="/craftList">My Art & Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-purple-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-purple-700 lg:hidden"
            >
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          <img className="w-60 " src={logo} alt="" />
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu space-x-4 menu-horizontal px-1">
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
                to="/craftItem"
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
                to="/craft"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                Add Craft
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/craftList"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-100 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                My Art & Craft List
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="l lg:-ml-5  md:ml-0 md:mt-0  navbar-end">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text"></span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                onChange={handleToggle}
              />
            </label>
          </div>
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
            <div className="space-x-4 md:flex ">
              {" "}
              <Link to="/signup">
                <button className="btn bg-lime-400 hover:bg-purple-300">
                  Register
                </button>
              </Link>
              <Link to="/signin">
                <button className="btn  bg-lime-400 hover:bg-purple-300">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
