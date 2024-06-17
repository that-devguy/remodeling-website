import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className="md:text-md rounded-xl bg-[#116ed1] px-5 py-3 text-sm font-bold text-white md:px-8"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
