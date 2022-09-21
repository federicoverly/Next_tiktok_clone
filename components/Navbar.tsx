import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from ".././utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { IUser } from "../types";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    userProfile,
    addUser,
    removeUser,
  }: {
    userProfile: IUser | any;
    addUser: (user: IUser) => {};
    removeUser: () => {};
  } = useAuthStore();

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Tik Tok"
            layout="responsive"
            priority={false}
          />
        </div>
      </Link>
      <div className="relative hidden md:block">
        <form
          className="absolute md:static top-10 left-20 bg-white"
          onSubmit={handleSearch}
        ></form>
        <input
          className="bg-primary p-3 md:text-md font-md border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
          type="text"
          value={searchValue}
          placeholder="Search accounts and videos"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
        >
          <BiSearch className="" />
        </button>
      </div>
      <div>
        {userProfile ? (
          <div className="flex gap-3 md:gap-10 ">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile?.image && (
              <Link href="/">
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    src={userProfile?.image}
                    alt={"Profile picture"}
                  />
                </>
              </Link>
            )}
            <button
              type="button"
              className="px-2"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
