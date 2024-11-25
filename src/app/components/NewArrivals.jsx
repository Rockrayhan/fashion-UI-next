import React from "react";
import { NewArrivalproducts } from "../lib/fakedata";
import NewArrivalCard from "./NewArrivalCard";

const NewArrivals = () => {
  console.log(NewArrivalproducts);

  return (
    <div className="my-24">
        <h6 className="text-primary"> FEATURED PRODUCT </h6>
        <h1 className="font-bold text-3xl mb-4"> NEW ARRIVAL </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {NewArrivalproducts.map((item) => (
          <NewArrivalCard item={item} key={item._id} />
        ))}
      </div>

        <div className="text-center mt-6">

      <button className="btn btn-secondary text-white px-8"> See More </button>
        </div>
    </div>
  );
};

export default NewArrivals;
