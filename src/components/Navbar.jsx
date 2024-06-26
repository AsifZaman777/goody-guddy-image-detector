import { Link } from "react-router-dom";


const Navbar = () => {



  const logoutHandler = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar flex items-center justify-between bg-base-100">
        <div className="flex-1">
          <Link
            to="/dashboard"
            className="btn btn-ghost text-xl hover:text-blue-500 transition-colors"
          >
            GG Image Repository
          </Link>
        </div>

        {/* Responsive Menu Icon */}
        <div className="flex items-center mr-10 md:hidden">
        <details className="dropdown">
  <summary className="m-1 btn">
  <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
  </summary>

  <ul className="p-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-25">
  
  <li className="" >
  <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller mx-10"
              value="halloween"
            />

            <p
              className="swap-off fill-current items-center justify-center font-light text-md w-25 h-5"
            >Dark Mode
            </p>

            <p
              className="swap-on fill-current items-center justify-center font-light text-md  w-25 h-5"
            >White mode
            </p>


           
          </label>
      </li>
    <li className="btn btn-error text-white">
                <Link
                  to="/login"
                  className="text-white"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
      </li>


  </ul>

</details>
         
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller mx-10"
              value="halloween"
            />

            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zzm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 btn btn-ghost btn-sm dropdown-toggle transition-colors ring ring-blue-500 ring-opacity-50"
             
            >
              <div className="flex items-center">
                <div className=" text-md transition-colors">
                  {localStorage.getItem('email')}
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-0 ml-2 z-[1] p-2 shadow bg-base-200 rounded-box w-30"
            
            >
              <li className="btn btn-error text-white">
                <Link
                  to="/login"
                  className="text-white"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
       
      </div>
    </div>
  );
};

export default Navbar;
