import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  try {
    return res.json()
  } catch (error) {
    console.log(error)
  }
};

const CategoryList = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div>
      <p className="text-3xl text-gray-700">Popular Categories</p>
      <div className=" mt-4 flex justify-between text-center items-center text-white ">
        {data?.map(item=> (
          <Link
            href={`/blog?cat=${item.slug}`}
            className=" border flex items-center gap-2 text-gray-700 px-6 py-2 rounded-md min-w-max hover:text-black hover:bg-teal-500"
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                className=" w-10 h-10 object-cover rounded-full"
                width={32}
                height={32}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
