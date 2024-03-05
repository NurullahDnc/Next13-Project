"use client"

import React from "react"
import { IconType } from "react-icons"

//*button comporenti

//tip belirleme
type buttonProps ={
    onSubmit: ()=> void,
    btnLabel: string,
    outline?: boolean,
    icon?: IconType
}

const Button:React.FC<buttonProps> = ({
    onSubmit,
    btnLabel,
    outline,
    icon: Icon,

}) => {
  return (
    <button className={`flex justify-center items-center w-full my-4 py-3 gap-2 rounded-md ${outline? "border border-black": "bg-black text-white "} `} onClick={onSubmit}>
      
      {Icon && <Icon size={25} />}
      {btnLabel}

    </button>
  )
}

export default Button
