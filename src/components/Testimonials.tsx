import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonials } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";

import testimon from "../assets/testimoni.png";

const Testimonials: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const testimonials = useSelector((state: any) => state.fetch.testimonials);
  const loading = useSelector((state: any) => state.fetch.loading);
  const error = useSelector((state: any) => state.fetch.error);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 1;

  useEffect(() => {
    dispatch(getTestimonials({ page: currentPage, limit }));
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
    <div className="flex lg:flex-row flex-col justify-between h-full lg:gap-4 gap-8 py-12">
      <div className="flex flex-col justify-between gap-8">
        <h2 className="text-4xl font-semibold">
          What People Are Saying About Us
        </h2>
        {testimonials.map((testimonial: any) => (
          <div key={testimonial.id}>
            {loading ? (
              <div className="rounded-md p-4 max-w-sm w-full">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-300 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                      </div>
                    </div>
                      <div className="h-2 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs font-light">{testimonial.title}</p>
                    </div>
                  </div>
                  <p><q>{testimonial.message}</q></p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="lg:flex hidden">
          <button
            className={`bg-white h-12 w-12 rounded-full shadow ${
              currentPage === 1
                ? "opacity-25"
                : "hover:bg-[#286F6C] hover:text-white"
            } duration-200`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i className="bi bi-arrow-left-short text-3xl"></i>
          </button>
          <button
            className={`bg-white h-12 w-12 rounded-full shadow ${
              currentPage === 10
                ? "opacity-25"
                : "hover:bg-[#286F6C] hover:text-white"
            } duration-200`}
            onClick={handleNextPage}
            disabled={currentPage === 10}
          >
            <i className="bi bi-arrow-right-short text-3xl"></i>
          </button>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden lg:max-w-[40%]">
        <img
          src={testimon}
          alt="Living Room"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:hidden flex justify-center">
        <button
          className={`bg-white h-12 w-12 rounded-full shadow ${
            currentPage === 1
              ? "opacity-25"
              : "hover:bg-[#286F6C] hover:text-white"
          } duration-200`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <i className="bi bi-arrow-left-short text-3xl"></i>
        </button>
        <button
          className={`bg-white h-12 w-12 rounded-full shadow ${
            currentPage === 10
              ? "opacity-25"
              : "hover:bg-[#286F6C] hover:text-white"
          } duration-200`}
          onClick={handleNextPage}
          disabled={currentPage === 10}
        >
          <i className="bi bi-arrow-right-short text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
