import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Elem from "./elem";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();
  return (
    <>
      <section className="w-5/6 mx-auto ">
        <span>
          Home {`>`} Shop {`>`} Рубашка
        </span>
        <div className="flex justify-center max-md:flex-col  w-full h-auto gap-10">
          <div className=" flex-shrink-0">
            <Image
              src={post.image}
              alt="s"
              height={700}
              width={500}
              className="rounded-xl border-[1px] border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-3 w-2/4">
            <h1 className=" text-3xl uppercase font-sanss font-extrabold">
              {post.title}
            </h1>
            <span>star228</span>
            <div className="flex gap-2 overflow-hidden">
              <h2 className="text-lg font-bold">${post.price}</h2>
              <h2 className="line-through text-lg font-bold text-gray-400">
                ${post.old_price}
              </h2>
              <h2 className="rounded-full bg-red-100 text-red-500 text-xs p-[5px] font-medium">
                -
                {Math.round(
                  (post.old_price - post.price) / (post.old_price / 100)
                )}
                %
              </h2>
            </div>
            <h1>{post.description}</h1>
            <hr />
            <span>Select colors</span>
            <div className="grid grid-cols-5 gap-1 ">
              <div className="rounded-full bg-black h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-white h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-violet-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
            </div>

            <hr />
            <span>Choose Size</span>
            <ul className="pt-3 ">
              <div className="flex gap-1">
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  XX-Small
                </li>

                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white ">
                  Small
                </li>
              </div>
            </ul>
            <hr />
            <div className="flex gap-3">
              <div className="flex bg-suki-100 rounded-full p-3 justify-between gap-3">
                <h1>-</h1>
                <h1>1</h1>
                <h1>+</h1>
              </div>
              <button className="bg-black text-white rounded-full p-3 w-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Elem />
    </>
  );
};
export default page;
