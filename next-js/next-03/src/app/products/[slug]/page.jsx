import React from "react";

const Product = ({ params }) => {
  console.log("params", params);
  const productId = params.slug;
  console.log("productId", productId);

  return <div> Single Product {productId} </div>;
};

export default Product;
