// src/components/Header.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeader, getData } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const header = useSelector((state: any) => state.fetch.header);
  const data = useSelector((state: any) => state.fetch.data);

  useEffect(() => {
    dispatch(getHeader());
    dispatch(getData());
  }, [dispatch]);

  return (
    <header>
      {header && (
        <div className="-translate-y-48">
          <div className="relative flex justify-center items-center">
            <div className="absolute flex flex-col justify-center items-center text-white mt-20">
              <h1 className="text-5xl font-semibold max-w-[50rem] text-center my-10">
                {header.title}
              </h1>
              <p className="max-w-lg text-center">{header.description}</p>
              <button className="font-semibold text-lg py-3 px-16 bg-white/[.4] rounded-xl backdrop-blur-sm mt-12">
                Shop Now
              </button>
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-white to-transparent h-16 w-full"></div>
            <div className="absolute -bottom-14 w-full lg:px-32 px-6">
              <div className="lg:flex justify-evenly grid grid-cols-3 gap-4 w-full bg-[#286F6C] py-6 lg:px-0 px-6 rounded-xl text-white">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-3xl font-semibold">{data.experience}</p>
                  <p className="text-center">
                    Year
                    <br />
                    Experience
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-0.5 h-24 flex bg-white"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-3xl font-semibold">{data.country}</p>
                  <p className="text-center">
                    Opened in
                    <br />
                    the country
                  </p>
                </div>
                <div className="w-0.5 h-24 bg-white lg:flex hidden"></div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-3xl font-semibold">{data.sold}</p>
                  <p className="text-center">
                    Furniture
                    <br />
                    Sold
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-0.5 h-24 flex bg-white"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-3xl font-semibold">{data.variant}</p>
                  <p className="text-center">
                    Variant
                    <br />
                    Furniture
                  </p>
                </div>
              </div>
            </div>
            <img
              src={header.banner}
              alt="Banner"
              className="object-cover min-h-[60rem] w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
