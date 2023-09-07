"use client";

import Image from "next/image";
import React from "react";
import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams || {};
  const product = useCart((state) => state.product);
  const addItemCart = useCart((state) => state.addItemCart);
  const { cost, productInfo, name, description } = product;
  console.log(product);
  console.log(searchParams);

  if (!product?.name) {
    window.location.href = "/";
  }


  function handleAddToCart(){
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost
    }
    addItemCart({newItem})
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
          <div className="md:p-2 md:shadow">
            <Image
              src={productInfo.images[0]}
              alt={name}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 ">
            <div className="flex md:flex md:flex-col md:items-start items-center justify-between text-xl gap-2">
              <h3>{name}</h3>
              <p className="md:text-base">${cost / 100}</p>
            </div>
            <p className="text-sm flex-1">{description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
