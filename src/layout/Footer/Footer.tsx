import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-semibold text-blue-600">Logo</div>

        <div className="flex gap-6 text-sm">
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>
          <NavLink to="/statis" className="hover:text-blue-600 transition">
            Statistic
          </NavLink>
          <NavLink to="/login" className="hover:text-blue-600 transition">
            Login
          </NavLink>
        </div>
        <div className="text-xs text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
