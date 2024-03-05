import React from "react";
import { FaUmbrella } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import CategoriesItem from "./CategoriesItem";
import { useParams, useSearchParams } from "next/navigation";

const Categories = () => {
  const categories = [
    {
      name:"otel",
      icon: FaUmbrella,
    },
    {
      name:"Kamp",
      icon: LiaHotelSolid,
    },
    {
      name:"Konaklama",
      icon: FaUmbrella,
    },
    {
      name:"Tatil Koyu",
      icon: LiaHotelSolid,
    },
  ];

  //urlden category name alıyor.
  const params = useSearchParams();
  const urlItem = params?.get('Category')
    
//   console.log(urlItem, "urlcategory");

  return (
    <div className="flex gap-7">
        
        {
            categories.map((cat, i)=>(
                <CategoriesItem

                    key={i}
                    name={cat.name}
                    icon={cat.icon}
                    //urlden gelen item ve cat.name esit ise true gidiyor
                    selected={urlItem == cat.name}

                />
            ))
        }
    </div>
  )
};

export default Categories;
