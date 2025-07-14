import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">Logo</h1>
        <nav className="flex gap-4 flex-wrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold underline"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statis"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold underline"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Statistic
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold underline"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
