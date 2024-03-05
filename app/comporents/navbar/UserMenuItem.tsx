"use client"

type UserMenuItemProps = {
    name: string;
    onClick: ()=> void; 
}

const UserMenuItem:React.FC<UserMenuItemProps> = ({
    name,
    onClick
}) => {

  return (
    <div onClick={onClick} className="py-2 px-2 text-lg hover:bg-gray-200 cursor-pointer">
        {name}
    </div>
  )
}

export default UserMenuItem
