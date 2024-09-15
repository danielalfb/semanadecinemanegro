import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="animatedButton w-full hover:scale-105 cursor-pointer"
    >
      <h2>{children}</h2>
      <h2>{children}</h2>
    </button>
  );
};

export default Button;
