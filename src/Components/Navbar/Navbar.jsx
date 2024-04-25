import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 border-2 border-purple-400 hover:bg-purple-600 font-bold font-display"
                    : "font-bold font-display"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink>All Art & craft Items</NavLink>
            </li>
            <li>
              <NavLink>Add Craft Item</NavLink>
            </li>
            <li>
              <NavLink>My Art&Craft List</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
