import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  const activeStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const getActivePage = (path) => {
    return location.pathname === path ? activeStyle : {};
  };

  return (
    <div>
      <nav className="h-[80px] flex justify-center items-center bg-black px-6 shadow-lg">
        <div className="nav flex gap-[20px]">
          <Link
            to="/"
            style={getActivePage('/')}
            className="text-white hover:text-black hover:bg-white hover:shadow-md text-lg transition-all py-[10px] px-[20px] rounded-[8px]"
          >
            Home
          </Link>
          <Link
            to="/men"
            style={getActivePage('/men')}
            className="text-white hover:text-black hover:bg-white hover:shadow-md text-lg transition-all py-[10px] px-[20px] rounded-[8px]"
          >
            Men
          </Link>
          <Link
            to="/women"
            style={getActivePage('/women')}
            className="text-white hover:text-black hover:bg-white hover:shadow-md text-lg transition-all py-[10px] px-[20px] rounded-[8px]"
          >
            Women
          </Link>
          <Link
            to="/electronic"
            style={getActivePage('/electronic')}
            className="text-white hover:text-black hover:bg-white hover:shadow-md text-lg transition-all py-[10px] px-[20px] rounded-[8px]"
          >
            Electronic
          </Link>
          <Link
            to="/jewellery"
            style={getActivePage('/jewellery')}
            className="text-white hover:text-black hover:bg-white hover:shadow-md text-lg transition-all py-[10px] px-[20px] rounded-[8px]"
          >
            Jewellery
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
