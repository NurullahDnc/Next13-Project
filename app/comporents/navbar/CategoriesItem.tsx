"use client";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

type CategoriesItemProps = {
  name: string;
  icon: IconType;
  selected: boolean;
};

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  name,
  icon: Icon,
  selected,
}) => {
    
  const router = useRouter();
  //push ile url category name godnerdim, category.tsx de karsılatırma yaptım gonderdim selected icerisinde, true ice border uygula
  return (
    <div
      onClick={() => router.push(`?Category=${name}`)}
      className={`flex gap-2 items-center justify-center cursor-pointer ${
        selected ? "border-b-2 border-black " : ""
      }`}
    >
      <Icon />
      <div>{name}</div>
    </div>
  );
};

export default CategoriesItem;
