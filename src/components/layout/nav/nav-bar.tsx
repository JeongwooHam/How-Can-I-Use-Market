"use client";

import Link from "next/link";
import { useState } from "react";
import NavItem from "./nav-item";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <nav className='relative z-10 w-full '>
      <div className='flex items-center justify-between mx-5 sm: mx-10 lg:mx-20'>
        <div className='flex items-center text-2xl font-bold text-[salmon]'>
          <Link href='/'>LOGO</Link>
        </div>
        <div className='sm:hidden text-2xl'>
          {isMenuOpen ? (
            <button onClick={handleMenu}>-</button>
          ) : (
            <button onClick={handleMenu}>+</button>
          )}
        </div>
        <div className='hidden sm:block'>
          <NavItem mobile={false} />
        </div>
        <div className='block sm:hidden'>
          {!isMenuOpen && <NavItem mobile />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
