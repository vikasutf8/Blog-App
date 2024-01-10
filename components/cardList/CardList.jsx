import React from "react";
import Card from "../card/Card";

const getData = async (cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?cat=${cat || ""}`, {
    cache: "no-store",
  });
  try {
    return res.json()
  } catch (error) {
    console.log(error)
  }
};

const CardList = async ({ cat }) => {
  const data = await getData(cat);
  // console.log(data)
  const reversedData = data
  .slice(0)
  .reverse()
  .map(element => {
    return element;
  });

  return (
    <div className="mt-8">
      <p className="text-3xl text-gray-700">Recent Posts</p>
      {reversedData?.map(item => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default CardList;
