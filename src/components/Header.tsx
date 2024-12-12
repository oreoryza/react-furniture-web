// src/components/Header.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeader, getData } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const header = useSelector((state: any) => state.fetch.header);
  const data = useSelector((state: any) => state.fetch.data);
  const loading = useSelector((state: any) => state.fetch.loading);
  const error = useSelector((state: any) => state.fetch.error);

  useEffect(() => {
    dispatch(getHeader());
    dispatch(getData());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <header>
      {header && (
        <div className="relative flex justify-center items-center lg:-translate-y-48 ">
          <div className="absolute flex flex-col justify-center items-center text-white mt-20">
            <h1 className="text-5xl font-bold max-w-[50rem] text-center my-10">{header.title}</h1>
            <p className="max-w-lg text-center">{header.description}</p>
            <button className="font-bold text-lg py-3 px-16 bg-white/[.4] rounded-xl backdrop-blur-sm mt-12">Shop Now</button>
          </div>
          <div className="absolute bottom-0 bg-gradient-to-t from-white to-transparent h-16 w-full">
          </div>
          <div className="absolute -bottom-14 bg-[#286F6C] flex justify-evenly w-[75%] py-6 rounded-xl text-white">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold">{data.experience}</p>
                <p className="text-center">Year<br />Experience</p>
            </div>
            <div className="w-0.5 h-24 bg-white"></div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold">{data.country}</p>
                <p className="text-center">Year<br />Experience</p>
            </div>
            <div className="w-0.5 h-24 bg-white"></div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold">{data.sold}</p>
                <p className="text-center">Year<br />Experience</p>
            </div>
            <div className="w-0.5 h-24 bg-white"></div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-bold">{data.variant}</p>
                <p className="text-center">Year<br />Experience</p>
            </div>
          </div>
          <img src={header.banner} alt="Banner" />
        </div>
      )}
    </header>
  );
};

export default Header;
