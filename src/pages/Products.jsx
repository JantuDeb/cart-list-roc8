import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import data from "../data.json"

export const Products = () => {
  return (
    <main className="p-2 flex flex-wrap gap-2">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </main>
  );
};
