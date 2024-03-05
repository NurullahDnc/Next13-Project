"use client"
import { useEffect, useState } from "react"

const MountedClient = ({children} : {children: React.ReactNode}) => {

    const [mounted ,setMounted] = useState(false)

    //sayfa yuklendiginde true yap
    useEffect(()=>{
        setMounted(true)
    },[])

    //mounted false ise null don
    if (!mounted) {
        return null
    }

  return (
    <>
      {children}
    </>
  )
}

export default MountedClient
