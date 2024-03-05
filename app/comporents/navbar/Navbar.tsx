'use client'

import Categories from "./Categories"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 h-16 bg-gray-200">
        <Logo />
        <Categories />
        <UserMenu />

    </div>
  )
}

export default Navbar
