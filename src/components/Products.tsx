import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: any) => state.fetch.products);
  const loading = useSelector((state: any) => state.fetch.loading);
  const error = useSelector((state: any) => state.fetch.error);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    dispatch(getProducts({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Pastikan tidak kurang dari 1
  };

  if (error) {
    return <div className="flex flex-col justify-center items-center w-full text-black/[.5]">
      <p className="text-2xl font-semibold">Oops, something went wrong!</p>
      <p>{error}</p>
    </div>
  }

  return (
    <div className="flex flex-col py-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-4xl font-semibold">All Product</h2>
        <p className="max-w-xl text-center">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {products.map((product: any) => (
            <div key={product.id}>
              {loading ? (
                <div className="rounded-md p-4 max-w-sm w-full mx-auto">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                      <div className="md:h-52 h-32 bg-slate-300 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                        </div>
                        <div className="h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group flex flex-col gap-2">
                  <div className="border-2 border-black/[.05] rounded-lg md:p-6 p-2 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full lg:h-48 sm:h-64 h-32 object-contain group-hover:scale-110 transition-all duration-200"
                    />
                  </div>
                  <p className="text-xl font-semibold">{product.title}</p>
                  <div className="flex gap-4">
                    <p className="font-medium">
                      ${product.price_after_discount}
                    </p>
                    <p
                      className={`${
                        product.price_after_discount === null
                          ? "font-medium"
                          : "font-light line-through"
                      }`}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            className={`bg-white h-12 w-12 rounded-full shadow mx-4 ${
              currentPage === 1
                ? "opacity-25"
                : "hover:bg-[#286F6C] hover:text-white"
            } duration-200`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i className="bi bi-arrow-left-short text-3xl"></i>
          </button>
          <div className={`w-3 h-3 bg-white border border-black rounded-full mx-2 ${currentPage === 1 ? "bg-black" : ""}`}></div>
          <div className={`w-3 h-3 bg-white border border-black rounded-full mx-2 ${currentPage === 2 ? "bg-black" : ""}`}></div>
          <div className={`w-3 h-3 bg-white border border-black rounded-full mx-2 ${currentPage === 3 ? "bg-black" : ""}`}></div>
          <button
            className={`bg-white h-12 w-12 rounded-full shadow mx-4 ${
              products.length < limit
                ? "opacity-25"
                : "hover:bg-[#286F6C] hover:text-white"
            } duration-200`}
            onClick={handleNextPage}
            disabled={products.length < limit}
          >
            <i className="bi bi-arrow-right-short text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
