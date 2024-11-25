import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivalCard = ({ item }) => {
  return (

    <div className="">

    
    <div className="flex flex-col bg-white rounded-lg gap-4">

      <div className="rounded-xl p-2">
        <Link href={`product/${item._id}`}>
          <div className="bg-accent rounded-xl">
            <Image src={item.img} height={287} width={286} className="w-full h-72 object-cover rounded-xl" alt="img_logo" />
          </div>
          <h3 className="text-end font-bold my-4 text-lg">BDT {item.price}</h3>
          <button className="btn btn-outline btn-primary  w-full"> Add to Cart </button>
        </Link>
      </div>

    </div>

    </div>
  );
};

export default NewArrivalCard;
