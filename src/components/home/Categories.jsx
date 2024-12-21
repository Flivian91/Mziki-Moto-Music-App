import React from "react";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="uppercase tracking-wide font-semibold text-lg md:text-xl text-stone-100">
        Category
      </h1>
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} active={true} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
        <CategoriesItem category={"Pop Music"} />
      </div>
    </div>
  );
}

export default Categories;
