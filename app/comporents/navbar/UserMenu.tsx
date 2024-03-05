"use client"
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import UserMenuItem from "./UserMenuItem";
import { useDispatch } from "react-redux";
import { loginModalFun, registerModalFun } from "@/app/redux/modalSlice";


const UserMenu = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const dispacth = useDispatch();


  return (
    <div onClick={()=> setOpenMenu(!openMenu)} className="flex relative justify-center gap-2 items-center  ">
       
        <div className="cursor-pointer">
            <RxHamburgerMenu size={22} />

        </div>
        <Image 
            src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
            alt=""
            width={35}
            height={35}
        />

        {
            openMenu &&(
                <div className="absolute bg-slate-100 shadow-lg top-10 right-0 w-[120px]">
                    <UserMenuItem 
                        name={"Sing In"}
                        onClick={()=> {dispacth(registerModalFun())}}
                    />

                    <UserMenuItem 
                        name={"Sing Un"}
                        onClick={()=> {dispacth(loginModalFun())}}

                    />
                </div>
            )
        }
    </div>
  )
}

export default UserMenu
