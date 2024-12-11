"use client";
import React, { useState } from "react";
import { Search, UserRoundPen, ShoppingCart, Menu, X } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import "../globals.css";

const Navbar = ({ query }: { query?: string }) => {
  const [ifMenuToggled, setIfMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  return (
    <div className=" w-full py-4 bg-white shadow-sm">
      <nav className={`${flexBetween} gap-5 mx-auto w-5/6`}>
        <Link href={"/"}>
          <span className="text-2xl font-extrabold uppercase">Shop.co</span>
        </Link>

        <div>
          <ul className="flex gap-5  text-lg max-md:hidden ">
            <Link href={"/category"}>
              <li>Shop</li>
            </Link>

            <li>On_Sale</li>
            <li>New_Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <Form action="/" scroll={false} className="search-form">
          <Search className="size-5 text-gray-400" />
          <input
            name="query"
            defaultValue={query}
            className="bg-gray-200 w-full"
            placeholder="Search Startups..."
          />

          <div className="flex gap-2"></div>
        </Form>

        <div className="flex gap-4 ">
          <div onClick={() => setIfMenuToggled(!ifMenuToggled)}>
            <Menu className="hidden max-md:block max-md:size-5 " />
          </div>
          <Link href={"/cart"}>
            <ShoppingCart className="max-md:size-5" />
          </Link>

          <UserRoundPen className="max-md:size-5" />
        </div>
        {ifMenuToggled && (
          <div className=" w-full h-full fixed  ">
            <div className="fixed rounded-xl right-0 bottom-0 z-40 h-full w-[300px] bg-gray-100 drop-shadow-xl">
              <div className="flex justify-end p-7">
                <button onClick={() => setIfMenuToggled(!ifMenuToggled)}>
                  <X className="h-6 w-6 text-blue-400" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="ml-10 flex flex-col text-2xl">
                <ul>
                  <Link
                    href={"/category"}
                    onClick={() => setIfMenuToggled(!ifMenuToggled)}
                  >
                    <li>Shop</li>
                  </Link>
                  <li>On_Sale</li>
                  <li>New_Arrivals</li>
                  <li>Brands</li>
                </ul>
              </div>
            </div>
            <div
              className="bg-gray-950   opacity-40 h-screen z-39"
              onClick={() => setIfMenuToggled(!ifMenuToggled)}
            ></div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
