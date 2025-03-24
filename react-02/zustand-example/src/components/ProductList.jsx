import React from "react";
import { useProductStore } from "../store/store";
import { useEffect } from "react";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain"
          />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-blue-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
