import React from "react";
import MenuItem from "./MenuItem";
import { MdMovie, AiFillHome, AiFillInfoCircle} from "react-icons/ai";
import Link from "next/link";
import DarkMode from "./DarkMode";
import NavbarItem from "./NavbarItem";


const Header = () => {
  return (
    <>
      <div className="flex justify-between  dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 sticky top-0 ... ">
        <Link href="/home">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
              Movie
            </span>
            <span className="text-xl hidden sm:inline font-bold">Mania</span>
          </h2>
        </Link>

        <div className="flex align-center">
          <MenuItem title={"Home"} address={"/home"} Icon={AiFillHome} />
          <MenuItem title={"Movies"} address={"/"} Icon={AiFillHome} />
          <MenuItem
            title={"About"}
            address={"/about"}
            Icon={AiFillInfoCircle}
          />
          <NavbarItem title={"Trending"} param="fetchTrending" />
          <NavbarItem title={"Top Rated"} param="fetchTopRated" />
        </div>

        <div className="flex items-center space-x-5">
          <DarkMode />
        </div>
      </div>
    </>
  );
};

export default Header;

