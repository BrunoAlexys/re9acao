import { useState } from "react";
import imageUser from "./assets/Default-Profile.png";

type UserItemProps = {
  name: string;
  onSelect: (selected: boolean) => void; 
};

export const UserItem = ({ name, onSelect }: UserItemProps) => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState); 
    onSelect(newCheckedState); 
  };

  return (
    <div className="bg-popup h-16 border-b-2 flex relative border-[#ccc]">
      <div className="bg-white m-2 rounded-full w-12 h-12 flex items-center justify-center">
        <img src={imageUser} alt="User" />
      </div>
      <p className="text-color-black font-bold mt-5 ml-2">{name}</p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-6 h-6 rounded-lg border-2 border-colorMenuPrimary absolute top-5 right-4 cursor-pointer"
      />
    </div>
  );
};
