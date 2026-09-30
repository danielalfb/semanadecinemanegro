import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full hover:scale-105 cursor-pointer flex mt-12"
    >
      <div className="animatedButton w-full flex items-center justify-center">
        <h2>{children}</h2>
        <h2>{children}</h2>
      </div>
    </button>
  );
};

export default Button;
