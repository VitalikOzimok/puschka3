"use client";
import React from "react";
import Boy from "../../public/boy.jpg";
import Image from "next/image";

import Gucci from "../assets/gucci-logo-1 1.png";
import Vector_1 from "../assets/Vector (1).png";
import Vector from "../assets/Vector.png";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Men from "../../public/men.jpg";
import Men_2 from "../../public/image 13.png";
import Women from "../../public/women.jpg";
import Kach from "../../public/kach.jpg";
import Comment from "../components/Comment/index";

import Victor from "../assets/Victor.png";

const page = () => {
  const posts = [
    {
      _id: 1,
      price: 300,
      old_price: 250,
      discount: 10,
      image: "https://cdn1.ozone.ru/s3/multimedia-7/6018552931.jpg",

      title: "We Robots",
    },
    {
      _id: 2,
      price: 3470,
      old_price: 23550,
      discount: 80,
      image:
        "https://sun9-55.userapi.com/impg/s_hXlcs6u-G3HnO8ZXG3r3ozyveYlnSkcWE2Ag/tsa09zSicUo.jpg?size=864x1920&quality=95&sign=0ff47d951877533e00bcfed382cad084&type=album",

      title: "We Robots",
    },
    {
      _id: 3,
      price: 1200,
      old_price: 63250,
      discount: 20,
      image:
        "https://sun9-16.userapi.com/impg/pOhWy5cIYFgnYswMUeyIiAxtAFNaUSUs-oyaAA/nKJJ8eEIANo.jpg?size=972x1402&quality=95&sign=6c6dec44928e73da41abfd3f01541858&type=album",

      title: "We Robots",
    },
    {
      _id: 4,
      price: 500,
      old_price: 2270,
      discount: 90,
      image:
        "https://sun9-53.userapi.com/impg/x5pDwDjwzGScCG1z-NrfhztT4CkjwlXAtYjhUw/SEo94qx0Hw8.jpg?size=486x1080&quality=95&sign=3276500274b1e1b9cf0c42a170d47aad&type=album",

      title: "We Robots",
    },
  ];
  return (
    <>
      <section className=" gap-16 md:h-full ">
        <motion.div className="mx-auto w-5/6 items-center justify-center md:flex ">
          <div className=" z-10 pt-12 pb-10 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="font-s3 font-extrabold uppercase text-7xl max-xs:text-4xl  whitespace-nowrap flex max-md:justify-center ">
                Find Clothes <br /> that matches <br /> your style
              </span>

              <p className="font-s5 mt-8 text-sm ">
                Browse through our divrse range of Browse through our divrse
                range ofBrowse through our divrse range ofBrowse through our
                divrse range ofBrowse through our divrse range ofBrowse through
                our divrse range ofBrowse through our divrse range of
              </p>
              <div className="pt-5">
                <button className="p-3 px-14 max-md:w-full border-[1px] hover:bg-suki-100 hover:text-black  hover:border-gray-300 transition  bg-black text-white rounded-full text-md ">
                  Shop Now
                </button>
              </div>

              <div className="flex flex-row pt-7 gap-5 max-md:justify-center">
                <div className="flex flex-col">
                  <h1 className="sis">200+</h1>
                  <span>International Brands</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="sis">200+</h1>
                  <span>International Brands</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="sis">200+</h1>
                  <span>International Brands</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex-shrink-0">
            <Image src={Boy} alt="BoyGirl" className="h-full w-auto" />
          </div>
        </motion.div>
      </section>
      <div className="h-auto bg-black">
        <div className=" w-5/6 mx-auto  flex max-md:flex-col justify-between items-center py-9  max-lg:hidden">
          <Image src={Vector} alt="s" />
          <Image src={Gucci} alt="s" />
          <Image src={Vector_1} alt="s" />

          <Image src={Victor} alt="s" />
        </div>
      </div>
      <section
        className=" w-5/6 border-b border-gray-300 mx-auto flex flex-col pb-8 justify-center
       items-center"
      >
        <h1 className="py-8 text-3xl uppercase font-sanss font-extrabold">
          New Arrivals
        </h1>
        <div className="grid  grid-cols-4 w-auto mx-auto gap-5 ">
          {posts?.length > 0 ? (
            posts.map((post) => <Card key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No sturtup found</p>
          )}
        </div>
        <div className="pt-8">
          <button className="rounded-full border-[1px] border-gray-200  p-3 px-14 hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </section>
      <section
        className=" w-5/6  mx-auto flex flex-col pb-8 justify-center
       items-center"
      >
        <h1 className="py-8 text-3xl uppercase font-sanss font-extrabold">
          top selling
        </h1>
        <div className="grid grid-cols-4 w-full mx-auto gap-5">
          {posts?.length > 0 ? (
            posts.map((post) => <Card key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No sturtup found</p>
          )}
        </div>
        <div className="pt-8">
          <button className="rounded-full border-[1px] border-gray-200  p-3 px-14 hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </section>
      <section className=" rounded-xl bg-gray-100 pb-8">
        <h1 className="py-8 text-3xl uppercase font-sanss font-extrabold items-center flex justify-center">
          browse by dress style
        </h1>
        <div className="w-5/6 mx-auto flex flex-col gap-3 items-center justify-center">
          <div className="grid grid-cols-[2fr,1fr] gap-4 h-[280]">
            <div className=" rounded-xl  bg-white relative overflow-hidden">
              <p className="absolute  p-5 font-sanss font-extrabold text-2xl">
                Formal
              </p>
              <Image
                src={Kach}
                alt="s"
                className="   h-full  object-cover object-right"
              />
            </div>
            <div className=" rounded-xl  bg-white relative overflow-hidden">
              <p className="absolute   p-5 font-sanss font-extrabold text-2xl">
                Pathy
              </p>
              <Image
                src={Women}
                alt="s"
                className="   h-full  object-cover object-center"
              />
            </div>
          </div>
          <div className="grid h-[280] grid-cols-[1fr,2fr] gap-4 w-full ">
            <div className=" rounded-xl  bg-white relative overflow-hidden">
              <p className="absolute  p-5 font-sanss font-extrabold text-2xl">
                Casual
              </p>
              <Image
                src={Men_2}
                alt="s"
                className="  h-full  object-cover object-center"
              />
            </div>
            <div className=" rounded-xl  bg-white relative overflow-hidden">
              <p className="absolute p-5 font-sanss font-extrabold text-2xl">
                Gym
              </p>
              <Image
                src={Men}
                alt="s"
                className="   h-full  object-cover object-center "
              />
            </div>
          </div>
        </div>
      </section>
      <Comment />
    </>
  );
};

export default page;
