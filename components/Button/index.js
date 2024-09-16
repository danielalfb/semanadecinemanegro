import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="animatedButton hover:scale-105 cursor-pointer flex mt-32 mb-32"
    >
      <div className="w-full flex">
      <h2>{children}</h2>
      <h2>{children}</h2>
      </div>
    </button>
  );
};

export default Button;
