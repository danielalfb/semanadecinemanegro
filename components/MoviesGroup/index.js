import React from "react";

export default function MoviesGroup({ children, isBox }) {
  return (
    <div
      className={
        isBox
          ? "grid gap-4 desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1"
          : ""
      }
    >
      {children}
    </div>
  );
}
