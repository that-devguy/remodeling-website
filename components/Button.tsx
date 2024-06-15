import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button className="text-white bg-[#116ed1] py-3 px-8 rounded-xl text-md font-bold" type={type}>
      {title}
    </button>
  );
};

export default Button;
