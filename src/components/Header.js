import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./Store/authStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((currState) => currState.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <header className="bg-indigo-500">
      <div className="container mx-auto py-4 px-6 md:px-8 flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl md:text-4xl font-serif ">
          Job Finder
        </h1>
        <nav className="md:flex md:space-x-4">
          {isLoggedIn && <NavLink to="/Landing">Landing</NavLink>}
          {isLoggedIn && <NavLink to="/jobs">Jobs</NavLink>}
          {/* {isLoggedIn && <NavLink to="/job/:id">Job Details</NavLink>} */}
          {/* {isLoggedIn && <NavLink to="/apply/:id">Apply</NavLink>} */}
          {isLoggedIn && (
            <button
              className="text-white font-bold bg-transparent hover:bg-indigo-700 px-4 py-2 mr-2 rounded"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white font-bold hover:bg-indigo-700 py-2 px-4 rounded-md transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Header;
