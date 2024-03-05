"use client";

import React from "react";
import {
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  register,
  errors,
}) => {
  return (
    <div>
      <input
        //inputta hata oldugu zaman o inputtun border red yap, id gore seciyor "name'e gore"
        className={`${
          errors[id] ? "border border-red-500" : "border border-gray-500"
        } w-full h-14 outline-none p-3 rounded-md my-2`}
        {...register(id, { required })}
        name={id}
        type={type}
        placeholder={placeholder}
      />

        {/*input altında hata varsa gosteriyor */}
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1"> "lütfen Bu alanı doldurunuz"</p>
      )}
    </div>
  );
};

export default Input;
