'use client'

import { User } from "@prisma/client"
import Categories from "./Categories"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = ({user}: {user:User | any | undefined}) => {
  return (
    <div className="flex justify-between items-center px-10 h-16 bg-gray-200">
        <Logo />
        <Categories />
        <UserMenu user={user} />

    </div>
  )
}

export default Navbar
