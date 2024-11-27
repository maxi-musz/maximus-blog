import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const MainCategories = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    { name: "Latest", to: "/posts" },
    { name: "Trending", to: "/posts?cat=trending" },
    { name: "Politics", to: "/posts?cat=politics" },
    { name: "Health", to: "/posts?cat=health" },
    { name: "Agriculture", to: "/posts?cat=agriculture" },
    { name: "Crime", to: "/posts?cat=crime" },
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex bg-gray-800 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
        {/* Links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className={`${
                category.name === "Latest"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-800 text-white"
              } rounded-full px-4 py-2`}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <span className="text-xl font-medium">|</span>
        {/* Search */}
        <Search />
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between gap-1 bg-gray-800 p-2 rounded-lg shadow-md">
        {/* Limited Categories */}
        <div className="flex gap-1 flex-shrink-0">
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className={`${
                category.name === "Latest"
                  ? "bg-blue-800 text-white"
                  : category.name === "More"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-white"
              } rounded-full px-1 py-1 text-sm`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* View All Categories */}
        <div
          className="bg-teal-500 text-white p-1 rounded-lg shadow-md text-sm underline flex-shrink-0 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "More"}
        </div>

        {/* Dropdown Modal */}
        <div
          className={`w-full h-screen flex flex-col gap-8 items-center justify-center absolute top-16 left-0 bg-gray-800 transition-all ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white bg-red-500 px-3 py-1 rounded-full"
            onClick={() => setOpen(false)}
          >
            X
          </button>

          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              My Dashboard ⚙️
            </button>
          </Link>
          <Link to="/">Latest</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Tech</Link>
          <Link to="/">Politics</Link>
          <Link to="/">Health</Link>
          <Link to="/">Agriculture</Link>
          <Link to="/">Crime</Link>
        </div>

        {/* Compact Search */}
        <div className="ml-auto flex-shrink-0">
          <Search compact />
        </div>
      </div>
    </>
  );
};

export default MainCategories;
