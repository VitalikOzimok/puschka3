import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ post }) => {
  const { old_price, title, price, _id, image } = post;
  return (
    <Link href={`/products/${_id}`}>
      <div>
        <div className="flex flex-col   hover:scale-105 duration-200   ">
          <div className=" w-full h-[330px]  object-cover object-center flex   justify-center overflow-hidden items-center rounded-xl">
            <Image
              src={image}
              alt="img"
              width={250}
              height={450}
              className="w-auto h-auto max-w-full rounded-xl"
            />
          </div>

          <p className="font-bold">{title}</p>
          <h1>star 228</h1>
          <div className="flex gap-3 overflow-hidden">
            <h2 className="text-lg font-bold">${price}</h2>
            <h2 className="line-through text-lg font-bold text-gray-400">
              ${old_price}
            </h2>
            <h2 className="rounded-full bg-red-100 text-red-500 text-xs p-[5px] font-medium">
              -{Math.round((old_price - price) / (old_price / 100))}%
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
